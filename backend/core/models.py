from django.core.exceptions import ValidationError
from django.db import models


class SiteSettings(models.Model):
    """Singleton model holding global, admin-editable site content
    (site name, tagline, contact details, hero copy) so nothing is
    hard-coded in the frontend."""

    site_name = models.CharField(max_length=100, default="Habari Maalum TV")
    tagline = models.CharField(max_length=100, default="Habari \u2022 Ukweli \u2022 Uhalisia")
    hero_description = models.TextField(
        max_length=300,
        default="Tunakuletea habari, mahojiano, burudani na matukio muhimu kutoka Tanzania na ulimwengu.",
    )
    phone = models.CharField(max_length=30, default="+255 712 345 678")
    email = models.EmailField(default="info@habarimaalumtv.co.tz")
    address = models.CharField(max_length=150, default="Dar es Salaam, Tanzania")

    class Meta:
        verbose_name_plural = "Site Settings"

    def clean(self):
        # Enforce a single row (singleton pattern) so Django Admin behaves
        # like a "site settings" form rather than a list of rows.
        if not self.pk and SiteSettings.objects.exists():
            raise ValidationError("Site settings already exist. Edit the existing row instead.")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.site_name


class SocialLink(models.Model):
    PLATFORM_CHOICES = [
        ("youtube", "YouTube"),
        ("instagram", "Instagram"),
        ("facebook", "Facebook"),
        ("tiktok", "TikTok"),
        ("x", "X (Twitter)"),
    ]

    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES, unique=True)
    label = models.CharField(max_length=40, help_text="e.g. Subscribe, Follow, Like Page")
    url = models.URLField()
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["platform"]

    def __str__(self):
        return f"{self.get_platform_display()} ({self.url})"


class ContactMessage(models.Model):
    """Stores messages submitted through the public contact form so they
    can be reviewed and actioned from Django Admin."""

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    subject = models.CharField(max_length=150)
    message = models.TextField(max_length=2000)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} — {self.subject}"
