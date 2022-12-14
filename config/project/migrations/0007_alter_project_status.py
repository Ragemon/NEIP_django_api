# Generated by Django 3.2.5 on 2021-10-20 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0006_auto_20211020_0704'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='status',
            field=models.CharField(blank=True, choices=[('PRESIDENTIAL PITCH', 'PRESIDENTIAL PITCH'), ('BUSINESS SUPPORT PROGRAMME', 'BUSINESS SUPPORT PROGRAMME'), ('SEI', 'SEI'), ('PEWED', 'PEWED'), ('PEMED', 'PEMED'), ('SPECIAL PROJECTS (PARTNERSHIP)', 'PARTNERSHIP')], default='PRESIDENTIAL PITCH', max_length=100, null=True),
        ),
    ]
