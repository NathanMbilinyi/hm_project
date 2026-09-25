from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    """A programme category, e.g. Habari, Mahojiano, Michezo, Utalii.

    Admins create and colour-code these from Django Admin; the frontend
    uses `color` to render the badge shown on each programme card.
    """

    name = models.CharField(max_length=80, unique=True)
    slug = models.SlugField(max_length=90, unique=True, blank=True)
    color = models.CharField(
        max_length=7,
        default="#E31B23",
        help_text="Hex color used for the category badge, e.g. #E31B23",
    )

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ["name"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Program(models.Model):
    """A television programme. Fully managed from Django Admin so no
    programme content is hard-coded into the frontend."""

    title = models.CharField(max_length=150)
    slug = models.SlugField(max_length=170, unique=True, blank=True)
    description = models.TextField(max_length=500)
    image = models.ImageField(upload_to="programs/", blank=True, null=True)
    image_url = models.URLField(
        blank=True,
        help_text="Optional external/Cloudinary image URL, used if no image file is uploaded.",
    )
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="programs")
    youtube_url = models.URLField(blank=True)
    is_featured = models.BooleanField(
        default=False, help_text="Featured programmes appear on the homepage."
    )
    is_published = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0, help_text="Lower numbers show first.")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    @property
    def resolved_image(self):
        if self.image:
            return self.image.url
        return self.image_url
