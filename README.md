# CKAN Plugin for open.data.org.il modifications

This is a [CKAN](https://github.com/ckan/ckan) 2.8 plugin containing custom modifications served on https://open.data.org.il/

## Install

Standard CKAN plugin installation

The plugin also requires [ckanext-scheming](https://github.com/ckan/ckanext-scheming) plugin to be installed with the following configuration:

```
scheming.group_schemas = ckanext.open_data_org_il:ckanext-scheming-group-settings.json
```

### Updating translations code

Update the .pot file (from an active ckan environment) - 

```
python setup.py extract_messages
```

Edit the .pot file and remove core ckan strings (which are there only because of extending core ckan templates)

Leave only strings unique to open.data.org.il

Use your favorite translations editor to create po and mo files under i18n/(ar|he)/LC_MESSAGES/ckanext-open_data_org_il.(mo|po)
