from rest_framework import viewsets, permissions, generics
from .models import SiteSettings, SocialLink, ContactMessage
from .serializers import SiteSettingsSerializer, SocialLinkSerializer, ContactMessageSerializer


class SiteSettingsView(generics.RetrieveAPIView):
    """Public. Returns the single SiteSettings row (creating sensible
    defaults on first access so the frontend never sees an empty response)."""

    serializer_class = SiteSettingsSerializer
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        obj, _ = SiteSettings.objects.get_or_create(pk=1)
        return obj


class SocialLinkViewSet(viewsets.ReadOnlyModelViewSet):
    """Public, read-only. Social links (URLs) are managed from Django Admin
    so they are never hard-coded into the frontend."""

    queryset = SocialLink.objects.filter(is_active=True)
    serializer_class = SocialLinkSerializer
    permission_classes = [permissions.AllowAny]


class ContactMessageCreateView(generics.CreateAPIView):
    """Public write-only endpoint the contact form POSTs to. Messages land
    in Django Admin for staff to review; nothing is emailed automatically
    yet — that can be added later without changing this API shape."""

    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]
