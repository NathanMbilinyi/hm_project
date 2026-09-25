from django.core.management.base import BaseCommand
from programs.models import Category, Program
from core.models import SiteSettings, SocialLink


class Command(BaseCommand):
    help = "Seed the database with starter content matching the design brief."

    def handle(self, *args, **options):
        settings_obj, _ = SiteSettings.objects.get_or_create(pk=1)
        settings_obj.site_name = "Habari Maalum TV"
        settings_obj.tagline = "Habari \u2022 Ukweli \u2022 Uhalisia"
        settings_obj.hero_description = (
            "Tunakuletea habari, mahojiano, burudani na matukio muhimu kutoka "
            "Tanzania na ulimwengu."
        )
        settings_obj.phone = "+255 712 345 678"
        settings_obj.email = "info@habarimaalumtv.co.tz"
        settings_obj.address = "Dar es Salaam, Tanzania"
        settings_obj.save()

        categories = {
            "Habari": "#E31B23",
            "Mahojiano": "#0B1A33",
            "Michezo": "#1C7C3E",
            "Utalii": "#C9821A",
        }
        category_objs = {}
        for name, color in categories.items():
            cat, _ = Category.objects.get_or_create(name=name, defaults={"color": color})
            category_objs[name] = cat

        programs = [
            ("Habari Kuu", "Habari", "Uchambuzi wa kina wa habari za ndani na nje ya nchi."),
            ("Maisha ya Jamii", "Mahojiano", "Hadithi za watu, changamoto na mafanikio katika jamii."),
            ("Mchezo na Burudani", "Michezo", "Taarifa, uchambuzi na matukio ya michezo hapa na duniani."),
            ("Tanzania Yetu", "Utalii", "Uzuri wa nchi yetu, utamaduni na vivutio vya kitalii."),
        ]
        for i, (title, cat_name, desc) in enumerate(programs):
            Program.objects.get_or_create(
                title=title,
                defaults={
                    "description": desc,
                    "category": category_objs[cat_name],
                    "youtube_url": "https://youtube.com/@habarimaalumtv",
                    "is_featured": True,
                    "is_published": True,
                    "order": i,
                },
            )

        social_links = [
            ("youtube", "Subscribe", "https://youtube.com/@habarimaalumtv"),
            ("instagram", "Follow", "https://instagram.com/habarimaalumtv"),
            ("facebook", "Like Page", "https://facebook.com/habarimaalumtv"),
        ]
        for platform, label, url in social_links:
            SocialLink.objects.get_or_create(
                platform=platform, defaults={"label": label, "url": url, "is_active": True}
            )

        self.stdout.write(self.style.SUCCESS("Seed data created successfully."))
