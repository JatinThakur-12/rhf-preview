# RHF Preview

A small utility for viewing `react-hook-form` values in a quick and easy way. This library provides a React component that displays form values, errors, touched fields, dirty fields, and form state in a clean, developer-friendly interface.

## Features

- **Real-time Form Monitoring**: Displays form values, errors, and state as they change.
- **React Hook Form Integration**: Seamlessly integrates with `react-hook-form` for easy setup.
- **Portal-based UI**: Renders a floating preview panel using React portals for flexible positioning.
- **Customizable Styling**: Comes with CSS classes for easy styling customization.
- **TypeScript Support**: Fully typed with TypeScript for a robust development experience.

## Installation

Install the package using npm or yarn:

```bash
npm install rhf-preview
```

or

```bash
yarn add rhf-preview
```

## Usage

1. Ensure you have `react`, `react-dom`, and `react-hook-form` installed in your project.
2. Wrap your form with the `FormProvider` from `react-hook-form`.
3. Add the `RHFPreview` component to your form to display the preview panel.

### Example

```jsx
import { FormProvider, useForm } from 'react-hook-form';
import RHFPreview from 'rhf-preview';

function MyForm() {
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <input {...methods.register('name')} placeholder="Name" />
        <input {...methods.register('email')} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
      <RHFPreview />
    </FormProvider>
  );
}

export default MyForm;
```

### How It Works

- The `RHFPreview` component uses `useFormContext` from `react-hook-form` to access form state and values.
- A button (rendered via a React portal) toggles the visibility of the preview panel.
- The preview panel displays:
  - **Form Values**: All current form values.
  - **Form State**: Key form state properties (excluding certain fields like errors and touched fields).
  - **Errors**: Any validation errors for form fields.
  - **Dirty Fields**: Fields that have been modified.
  - **Touched Fields**: Fields that have been interacted with.

## Props

The `RHFPreview` component does not accept any props directly, as it relies on the `FormProvider` context from `react-hook-form`.

## Styling

The preview panel uses the following CSS classes for styling:

- `mainContainerStyles`: The main container for the preview panel.
- `heading`: The title of the preview panel.
- `typeContainer`: Containers for each section (e.g., Form Values, Errors).
- `typeContainer__title`: Section titles.
- `typeContainer__row`: Rows within each section.
- `typeContainer__label`: Labels for field names.
- `typeContainer__value`: Values for fields.

You can override these styles by providing your own CSS. The styles are defined in `global.css` within the package.

## Development

To contribute or modify the library:

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run rollup
```

### Scripts

- `npm run rollup`: Builds the library using Rollup, generating CommonJS, ES modules, and TypeScript declaration files.
- `npm test`: Placeholder for tests (not yet implemented).

### Project Structure

- `src/index.tsx`: Entry point for the `RHFPreview` component.
- `src/preview.tsx`: Main preview panel component.
- `src/components/`: Contains components for displaying form values, errors, state, etc.
- `src/global.css`: Default styles for the preview panel.
- `rollup.config.js`: Rollup configuration for building the library.
- `tsconfig.json`: TypeScript configuration.

## Dependencies

### Peer Dependencies

- `react`: ^18.0.0 || ^19.0.0
- `react-dom`: ^18.0.0 || ^19.0.0
- `react-hook-form`: ^7.0.0

### Dev Dependencies

- Rollup plugins for bundling and TypeScript support.
- TypeScript for type checking.
- PostCSS for CSS processing.

## License

This project is licensed under the ISC License. See the `package.json` for more details.

## Author

Jatin Thakur