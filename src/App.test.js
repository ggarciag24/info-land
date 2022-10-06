import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
})

const search = () => {
  const searchBarElement = screen.getByRole('textbox');
  fireEvent.change(searchBarElement, {target: {value:'uruguay'}});
  const searchBtn = screen.getByTestId('searchBtn')
  fireEvent.click(searchBtn);
}

test('search bar appears on page load and can be typed into', () => {
  const searchBarElement = screen.getByRole('textbox');
  fireEvent.change(searchBarElement, {target: {value:'uruguay'}});

  expect(searchBarElement).toBeInTheDocument();
  expect(searchBarElement.value).toBe('uruguay');
});

test('when the country is searched the option div appears', () => {
  const countryOptionElement = screen.queryByTestId('option');
  expect(countryOptionElement).toBeNull();
  search();
  async () => {await waitFor(() => expect(screen.findByText(/uruguay/i)).toBeInTheDocument())};
});

test('when clicking on the option card the countries information is displayed', async() => {
  const countryNameElement = screen.queryByText(/uruguay/i);
  const countryCapitalElement = screen.queryByText(/montevideo/i);
  expect(countryNameElement).toBeNull();
  expect(countryCapitalElement).toBeNull();

  search();

  const option = await waitFor(() => (screen.findByText(/uruguay/i)));
  fireEvent.click(option);

  const countryNameElementAgain = await waitFor(() => screen.findByText(/uruguay/i));
  const countryCapitalElementAgain = await waitFor(() => screen.findByText(/montevideo/i));
  expect(countryNameElementAgain).toBeInTheDocument();
  expect(countryCapitalElementAgain).toBeInTheDocument();
});

test('all countries list is displayed on render', async() => {
  const firstListElement = await waitFor(() => screen.getByText(/afghanistan/i));
  expect(firstListElement).toBeInTheDocument();
})

test('when the filter is changed to each option the list is populated with the correct countries', async() => {
  const filterElement = screen.getByRole('combobox', {  name: /filter by region:/i})
  expect(filterElement).toBeInTheDocument();
  fireEvent.change(filterElement,{target: {value: 'Americas'}});
  const firstAmericasListElement = await waitFor(() => screen.getByText(/anguilla/i));
  expect(firstAmericasListElement).toBeInTheDocument();
  fireEvent.change(filterElement,{target: {value: 'Europe'}});
  const firstEuropeListElement = await waitFor(() => screen.getByText(/albania/i));
  expect(firstEuropeListElement).toBeInTheDocument();
  fireEvent.change(filterElement,{target: {value: 'Africa'}});
  const firstAfricaListElement = await waitFor(() => screen.getByText(/algeria/i));
  expect(firstAfricaListElement).toBeInTheDocument();
  fireEvent.change(filterElement,{target: {value: 'Asia'}});
  const firstAsiaListElement = await waitFor(() => screen.getByText(/afghanistan/i));
  expect(firstAsiaListElement).toBeInTheDocument();
  fireEvent.change(filterElement,{target: {value: 'Oceania'}});
  const firstOceaniaListElement = await waitFor(() => screen.getByText(/american samoa/i));
  expect(firstOceaniaListElement).toBeInTheDocument();
  fireEvent.change(filterElement,{target: {value: 'Antarctic'}});
  const firstAntarcticListElement = await waitFor(() => screen.getByText(/antarctica/i));
  expect(firstAntarcticListElement).toBeInTheDocument();
});

test('when the about route is clicked the about page is displayed', () => {
  const aboutRouteElement = screen.getByRole('heading', { name: /about/i });
  expect(aboutRouteElement).toBeInTheDocument();
  fireEvent.click(aboutRouteElement);
  const aboutPageHeadingElement = screen.getByRole('heading', {  name: /about this project/i});
  const emailElement = screen.getByRole('link', {  name: /ggarciag\.business@outlook\.com/i});
  const githubElement = screen.getByRole('link', {  name: /https:\/\/github\.com\/ggarciag24\//i});
  expect(aboutPageHeadingElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(githubElement).toBeInTheDocument();
})