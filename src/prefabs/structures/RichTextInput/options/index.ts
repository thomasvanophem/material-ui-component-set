import { option, hideIf, variable, toggle } from '@betty-blocks/component-sdk';
import { styles } from './styles';
import { validation } from './validation';

export const categories = [
  {
    label: 'Toolbar options',
    expanded: false,
    members: ['showBold', 'showItalic', 'showUnderlined', 'showStrikethrough'],
  },
  {
    label: 'Styling',
    expanded: false,
    members: [
      'hideLabel',
      'backgroundColor',
      'borderColor',
      'borderHoverColor',
      'borderFocusColor',
      'buttonColor',
      'buttonHoverColor',
      'buttonActiveColor',
      'labelColor',
      'placeholderColor',
      'helperColor',
      'errorColor',
    ],
  },
];

export const richTextOptions = {
  actionVariableId: option('ACTION_JS_VARIABLE', {
    label: 'Action input variable',
    value: '',
  }),

  actionProperty: option('ACTION_JS_PROPERTY', {
    label: 'Property',
    value: '',
    configuration: { condition: hideIf('actionProperty', 'EQ', '') },
  }),

  label: variable('Label', { value: [''] }),
  value: variable('Value', { value: [''] }),
  showBold: toggle('Bold', { value: true }),
  showItalic: toggle('Italic', { value: true }),
  showUnderlined: toggle('Underlined', { value: true }),
  showStrikethrough: toggle('Strikethrough', { value: true }),

  ...validation,
  ...styles,
};
