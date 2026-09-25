from rest_framework import serializers
from .models import Category, Program


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug", "color"]


class ProgramSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Program
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "image",
            "category",
            "youtube_url",
            "is_featured",
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        url = obj.resolved_image
        if not url:
            return ""
        if request and obj.image:
            return request.build_absolute_uri(url)
        return url
