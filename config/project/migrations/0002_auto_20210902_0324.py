# Generated by Django 3.2.5 on 2021-09-02 03:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='status',
            field=models.CharField(blank=True, choices=[('INCUBATION', 'INCUBATION'), ('PROPOSAL', 'PROPOSAL'), ('IN OPERATION', 'IN OPERATION')], default='INCUBATION', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='report',
            name='project_name',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='report', to='project.project'),
        ),
    ]