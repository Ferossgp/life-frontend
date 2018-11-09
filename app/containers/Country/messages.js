/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.CountryPage.header',
    defaultMessage: 'This is a page which shows information about a country',
  },
  currency_code: {
    id: 'app.components.CountryPage.currency_code',
    defaultMessage: 'Currency Code: ',
  },
  geoname_id: {
    id: 'app.components.CountryPage.geoname_id',
    defaultMessage: 'Geoname ID: ',
  },
  iso_alpha2: {
    id: 'app.components.CountryPage.iso_alpha2',
    defaultMessage: 'ISO alpha2: ',
  },
  iso_alpha3: {
    id: 'app.components.CountryPage.iso_alpha3',
    defaultMessage: 'ISO alpha3: ',
  },
  name: {
    id: 'app.components.CountryPage.name',
    defaultMessage: 'Country Name: ',
  },
  population: {
    id: 'app.components.CountryPage.population',
    defaultMessage: 'Population: ',
  },
});
