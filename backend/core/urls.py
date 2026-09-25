from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import SiteSettingsView, SocialLinkViewSet, ContactMessageCreateView

router = DefaultRouter()
router.register(r"social-links", SocialLinkViewSet, basename="social-link")

urlpatterns = [
    path("settings/", SiteSettingsView.as_view(), name="site-settings"),
    path("contact-messages/", ContactMessageCreateView.as_view(), name="contact-message-create"),
    path("", include(router.urls)),
]
