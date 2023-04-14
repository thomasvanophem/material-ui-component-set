import {
  wrapper,
  sizes,
  ThemeColor,
  color,
  size,
  variable,
  option,
  toggle,
  buttongroup,
  linked,
  displayLogic,
  property,
  component,
} from '@betty-blocks/component-sdk';
import { options as formOptions } from '../structures/ActionJSForm/options';
import { Box, TextInput, boxOptions, textInputOptions } from '../structures';

export const textWidget = [
  wrapper(
    {
      label: 'Text question',
      optionCategories: [],
      options: {
        property: linked({
          label: 'Question',
          value: {
            ref: {
              componentId: '#textInput',
              optionId: '#textInputProperty',
            },
          },
          optionRef: {
            id: '#textInputPropertyRef',
          },
          configuration: {
            showOnDrop: true,
          },
        }),
        label: linked({
          label: 'Label',
          value: {
            ref: { componentId: '#textInput', optionId: '#textInputLabel' },
          },
        }),
        placeholder: linked({
          label: 'Placeholder',
          value: {
            ref: {
              componentId: '#textInput',
              optionId: '#textInputPlaceholder',
            },
          },
        }),
        required: linked({
          label: 'Required to answer',
          value: {
            ref: {
              componentId: '#textInput',
              optionId: '#textInputRequired',
            },
          },
        }),
        questionSpacing: linked({
          label: 'Question spacing',
          value: {
            ref: {
              componentId: '#questionBox',
              optionId: '#questionBoxOuterSpacing',
            },
          },
        }),
        displayLogic: linked({
          label: 'Display logic',
          value: {
            ref: {
              componentId: '#questionBox',
              optionId: '#questionBoxDisplayLogic',
            },
          },
        }),
      },
    },
    [
      Box(
        {
          ref: {
            id: '#questionBox',
          },
          options: {
            ...boxOptions,
            backgroundColor: color('Background color', {
              value: ThemeColor.WHITE,
            }),
            borderColor: color('Border color', {
              value: ThemeColor.MEDIUM,
            }),
            borderWidth: size('Border thickness', {
              value: '1px',
              configuration: {
                as: 'UNIT',
              },
            }),
            borderRadius: size('Border radius', {
              value: '5px',
              configuration: {
                as: 'UNIT',
              },
            }),
            outerSpacing: sizes('Outer space', {
              value: ['0rem', '0rem', 'M', '0rem'],
              ref: {
                id: '#questionBoxOuterSpacing',
              },
            }),
            displayLogic: displayLogic('Display logic', {
              value: {},
              ref: {
                id: '#questionBoxDisplayLogic',
              },
            }),
          },
        },
        [
          component(
            'Form',
            {
              ref: { id: '#textQuestionForm' },
              options: {
                ...formOptions,
                actionId: option('ACTION_JS', {
                  label: 'Action',
                  value: '',
                  configuration: {
                    createAction: {
                      template: 'update',
                      permissions: 'inherit',
                    },
                  },
                }),
              },
            },
            [
              TextInput(
                {
                  label: 'Text field',
                  ref: { id: '#textInput' },
                  options: {
                    ...textInputOptions,
                    property: property('Property', {
                      value: '',
                      ref: { id: '#textInputProperty' },
                      configuration: {
                        createProperty: {
                          type: 'STRING',
                        },
                        allowedKinds: ['TEXT', 'URL', 'IBAN', 'STRING'],
                      },
                      showInAddChild: true,
                    }),
                    label: variable('Label', {
                      value: [''],
                      ref: { id: '#textInputLabel' },
                      optionRef: {
                        sourceId: '#textInputPropertyRef',
                        inherit: 'label',
                      },
                    }),
                    floatLabel: toggle('Place label above input', {
                      value: true,
                    }),
                    labelColor: color('Label color', {
                      value: ThemeColor.BLACK,
                    }),
                    placeholder: variable('Placeholder', {
                      ref: { id: '#textInputPlaceholder' },
                      value: [''],
                    }),
                    required: toggle('Required', {
                      ref: { id: '#textInputRequired' },
                    }),
                    margin: buttongroup(
                      'Margin',
                      [
                        ['None', 'none'],
                        ['Dense', 'dense'],
                        ['Normal', 'normal'],
                      ],
                      { value: 'none' },
                    ),
                  },
                },
                [],
              ),
            ],
          ),
        ],
      ),
    ],
  ),
];
