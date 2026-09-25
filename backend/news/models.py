from django.db import models
from django.utils.text import slugify
from programs.models import Category


class Article(models.Model):
    """A news article/story. Kept minimal for now (Phase 15 in the
    roadmap will expand this with authors, tags, and rich content), but
    already wired into the admin and a read-only API so it can be turned
    on for the frontend without a schema change."""

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    excerpt = models.CharField(max_length=300, blank=True)
    body = models.TextField()
    cover_image = models.ImageField(upload_to="news/", blank=True, null=True)
    cover_image_url = models.URLField(blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=True, related_name="articles"
    )
    is_breaking = models.BooleanField(default=False)
    is_published = models.BooleanField(default=False)
    published_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-published_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    @property
    def resolved_image(self):
        if self.cover_image:
            return self.cover_image.url
        return self.cover_image_url
