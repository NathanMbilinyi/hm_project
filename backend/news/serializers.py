from rest_framework import serializers
from programs.serializers import CategorySerializer
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = [
            "id",
            "title",
            "slug",
            "excerpt",
            "body",
            "image",
            "category",
            "is_breaking",
            "published_at",
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        url = obj.resolved_image
        if not url:
            return ""
        if request and obj.cover_image:
            return request.build_absolute_uri(url)
        return url
