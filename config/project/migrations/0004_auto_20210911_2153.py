# Generated by Django 3.2.5 on 2021-09-11 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0003_auto_20210904_0126'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='region',
            field=models.CharField(choices=[('ah', 'AHAFO'), ('as', 'ASHANTI'), ('be', 'BONO EAST'), ('ba', 'BRONG AHAFO'), ('ce', 'CENTRAL'), ('ea', 'EASTERN'), ('ga', 'GREATER ACCRA'), ('ne', 'NORTH EAST'), ('no', 'NORTHERN'), ('ot', 'OTI'), ('sa', 'SAVANNAH'), ('ue', 'UPPER EAST'), ('uw', 'UPPER WEST'), ('ws', 'WESTERN SEKONDI'), ('wn', 'WESTERN NORTH'), ('vo', 'VOLTA')], default='ga', max_length=2, verbose_name='region'),
        ),
        migrations.AlterField(
            model_name='project',
            name='loan_amount',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=15, null=True),
        ),
    ]
