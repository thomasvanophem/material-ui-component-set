(() => ({
  name: 'InnerWrapperPage',
  icon: 'RowColumnIcon',
  category: 'LAYOUT',
  type: 'page',
  isPublicPage: true,
  keywords: ['Layout', 'column', 'columns', '1'],
  beforeCreate: ({
    prefab,
    save,
    close,
    components: { Header, Content, Footer, PartialSelector },
  }) => {
    const [partialId, setPartialId] = React.useState('');
    return (
      <>
        <Header onClose={close} title="Configure" />
        <Content>
          <PartialSelector
            label="Select a partial"
            onChange={setPartialId}
            value={partialId}
            allowedTypes={[
              'BODY_COMPONENT',
              'CONTAINER_COMPONENT',
              'CONTENT_COMPONENT',
            ]}
          />
        </Content>
        <Footer
          onClose={close}
          onSave={() => {
            const newPrefab = prefab;

            const partial = {
              ...prefab.structure[0].descendants[0],
              partialId,
            };

            newPrefab.structure[0].descendants[0] = partial;

            save(newPrefab);
          }}
        />
      </>
    );
  },
  structure: [
    {
      type: 'WRAPPER',
      label: 'outer wrapper',
      options: [
        {
          key: '0',
          type: 'LINKED_OPTION',
          value: {
            ref: {
              componentId: '#componentId1',
              optionId: '#componentId1OptionId1',
            },
          },
        },
        {
          key: '1',
          type: 'LINKED_OPTION',
          value: {
            ref: {
              componentId: '#componentId2',
              optionId: '#componentId2optionId1',
            },
          },
        },
        {
          key: '2',
          type: 'LINKED_PARTIAL',
          value: {
            ref: {
              componentId: '#partialRef1',
            },
          },
        },
      ],
      descendants: [
        {
          ref: { id: '#partialRef1' },
          type: 'PARTIAL',
          partialId: '',
        },
        {
          ref: {
            id: '#componentId1',
          },
          name: 'Row',
          options: [
            {
              type: 'CUSTOM',
              label: 'Width',
              key: 'maxRowWidth',
              value: 'XL',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'S', value: 'S' },
                  { name: 'M', value: 'M' },
                  { name: 'L', value: 'L' },
                  { name: 'XL', value: 'XL' },
                  { name: 'Full', value: 'Full' },
                ],
              },
            },
            {
              value: '',
              label: 'Height',
              key: 'rowHeight',
              type: 'TEXT',
              configuration: {
                as: 'UNIT',
              },
            },
            {
              ref: {
                id: '#componentId1OptionId1',
              },
              value: 'transparent',
              label: 'Background color',
              key: 'backgroundColor',
              type: 'COLOR',
            },
            {
              value: ['0rem', '0rem', '0rem', '0rem'],
              label: 'Outer space',
              key: 'outerSpacing',
              type: 'SIZES',
            },
            {
              value: false,
              label: 'Advanced settings',
              key: 'advancedSettings',
              type: 'TOGGLE',
            },
            {
              type: 'VARIABLE',
              label: 'Test attribute',
              key: 'dataComponentAttribute',
              value: ['Row'],
              configuration: {
                condition: {
                  type: 'SHOW',
                  option: 'advancedSettings',
                  comparator: 'EQ',
                  value: true,
                },
              },
            },
          ],
          descendants: [
            {
              ref: {
                id: '#componentId2',
              },
              name: 'Column',
              options: [
                {
                  ref: {
                    id: '#componentId2optionId1',
                  },
                  label: 'Toggle visibility',
                  key: 'visible',
                  value: true,
                  type: 'TOGGLE',
                  configuration: {
                    as: 'VISIBILITY',
                  },
                },
                {
                  value: '4',
                  label: 'Column width',
                  key: 'columnWidth',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '4',
                  label: 'Column width (tablet landscape)',
                  key: 'columnWidthTabletLandscape',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '12',
                  label: 'Column width (tablet portrait)',
                  key: 'columnWidthTabletPortrait',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '12',
                  label: 'Column width (mobile)',
                  key: 'columnWidthMobile',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '',
                  label: 'Height',
                  key: 'columnHeight',
                  type: 'TEXT',
                  configuration: {
                    as: 'UNIT',
                  },
                },
                {
                  value: 'transparent',
                  label: 'Background color',
                  key: 'backgroundColor',
                  type: 'COLOR',
                },
                {
                  type: 'CUSTOM',
                  label: 'Horizontal Alignment',
                  key: 'horizontalAlignment',
                  value: 'inherit',
                  configuration: {
                    as: 'BUTTONGROUP',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'None', value: 'inherit' },
                      { name: 'Left', value: 'flex-start' },
                      { name: 'Center', value: 'center' },
                      { name: 'Right', value: 'flex-end' },
                    ],
                  },
                },
                {
                  type: 'CUSTOM',
                  label: 'Vertical Alignment',
                  key: 'verticalAlignment',
                  value: 'inherit',
                  configuration: {
                    as: 'BUTTONGROUP',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'None', value: 'inherit' },
                      { name: 'Top', value: 'flex-start' },
                      { name: 'Center', value: 'center' },
                      { name: 'Bottom', value: 'flex-end' },
                    ],
                  },
                },
                {
                  value: ['0rem', '0rem', '0rem', '0rem'],
                  label: 'Outer space',
                  key: 'outerSpacing',
                  type: 'SIZES',
                },
                {
                  value: ['M', 'M', 'M', 'M'],
                  label: 'Inner space',
                  key: 'innerSpacing',
                  type: 'SIZES',
                },
                {
                  value: false,
                  label: 'Advanced settings',
                  key: 'advancedSettings',
                  type: 'TOGGLE',
                },
                {
                  type: 'VARIABLE',
                  label: 'Test attribute',
                  key: 'dataComponentAttribute',
                  value: ['Column'],
                  configuration: {
                    condition: {
                      type: 'SHOW',
                      option: 'advancedSettings',
                      comparator: 'EQ',
                      value: true,
                    },
                  },
                },
              ],
              descendants: [
                // {
                //   type: 'WRAPPER',
                //   label: 'inner wrapper',
                //   options: [
                //     {
                //       key: '0',
                //       type: 'LINKED_OPTION',
                //       value: {
                //         ref: {
                //           componentId: '#componentId3',
                //           optionId: '#componentId3OptionId1',
                //         },
                //       },
                //     },
                //   ],
                //   descendants: [
                //     {
                //       name: 'Row',
                //       options: [
                //         {
                //           type: 'CUSTOM',
                //           label: 'Width',
                //           key: 'maxRowWidth',
                //           value: 'XL',
                //           configuration: {
                //             as: 'BUTTONGROUP',
                //             dataType: 'string',
                //             allowedInput: [
                //               { name: 'S', value: 'S' },
                //               { name: 'M', value: 'M' },
                //               { name: 'L', value: 'L' },
                //               { name: 'XL', value: 'XL' },
                //               { name: 'Full', value: 'Full' },
                //             ],
                //           },
                //         },
                //         {
                //           value: '',
                //           label: 'Height',
                //           key: 'rowHeight',
                //           type: 'TEXT',
                //           configuration: {
                //             as: 'UNIT',
                //           },
                //         },
                //         {
                //           value: 'transparent',
                //           label: 'Background color',
                //           key: 'backgroundColor',
                //           type: 'COLOR',
                //         },
                //         {
                //           value: ['0rem', '0rem', '0rem', '0rem'],
                //           label: 'Outer space',
                //           key: 'outerSpacing',
                //           type: 'SIZES',
                //         },
                //         {
                //           value: false,
                //           label: 'Advanced settings',
                //           key: 'advancedSettings',
                //           type: 'TOGGLE',
                //         },
                //         {
                //           type: 'VARIABLE',
                //           label: 'Test attribute',
                //           key: 'dataComponentAttribute',
                //           value: ['Row'],
                //           configuration: {
                //             condition: {
                //               type: 'SHOW',
                //               option: 'advancedSettings',
                //               comparator: 'EQ',
                //               value: true,
                //             },
                //           },
                //         },
                //       ],
                //       descendants: [
                //         {
                //           name: 'Column',
                //           options: [
                //             {
                //               label: 'Toggle visibility',
                //               key: 'visible',
                //               value: true,
                //               type: 'TOGGLE',
                //               configuration: {
                //                 as: 'VISIBILITY',
                //               },
                //             },
                //             {
                //               value: '4',
                //               label: 'Column width',
                //               key: 'columnWidth',
                //               type: 'CUSTOM',
                //               configuration: {
                //                 as: 'DROPDOWN',
                //                 dataType: 'string',
                //                 allowedInput: [
                //                   { name: 'Fit content', value: 'fitContent' },
                //                   { name: 'Flexible', value: 'flexible' },
                //                   { name: 'Hidden', value: 'hidden' },
                //                   { name: '1', value: '1' },
                //                   { name: '2', value: '2' },
                //                   { name: '3', value: '3' },
                //                   { name: '4', value: '4' },
                //                   { name: '5', value: '5' },
                //                   { name: '6', value: '6' },
                //                   { name: '7', value: '7' },
                //                   { name: '8', value: '8' },
                //                   { name: '9', value: '9' },
                //                   { name: '10', value: '10' },
                //                   { name: '11', value: '11' },
                //                   { name: '12', value: '12' },
                //                 ],
                //               },
                //             },
                //             {
                //               value: '4',
                //               label: 'Column width (tablet landscape)',
                //               key: 'columnWidthTabletLandscape',
                //               type: 'CUSTOM',
                //               configuration: {
                //                 as: 'DROPDOWN',
                //                 dataType: 'string',
                //                 allowedInput: [
                //                   { name: 'Fit content', value: 'fitContent' },
                //                   { name: 'Flexible', value: 'flexible' },
                //                   { name: 'Hidden', value: 'hidden' },
                //                   { name: '1', value: '1' },
                //                   { name: '2', value: '2' },
                //                   { name: '3', value: '3' },
                //                   { name: '4', value: '4' },
                //                   { name: '5', value: '5' },
                //                   { name: '6', value: '6' },
                //                   { name: '7', value: '7' },
                //                   { name: '8', value: '8' },
                //                   { name: '9', value: '9' },
                //                   { name: '10', value: '10' },
                //                   { name: '11', value: '11' },
                //                   { name: '12', value: '12' },
                //                 ],
                //               },
                //             },
                //             {
                //               value: '12',
                //               label: 'Column width (tablet portrait)',
                //               key: 'columnWidthTabletPortrait',
                //               type: 'CUSTOM',
                //               configuration: {
                //                 as: 'DROPDOWN',
                //                 dataType: 'string',
                //                 allowedInput: [
                //                   { name: 'Fit content', value: 'fitContent' },
                //                   { name: 'Flexible', value: 'flexible' },
                //                   { name: 'Hidden', value: 'hidden' },
                //                   { name: '1', value: '1' },
                //                   { name: '2', value: '2' },
                //                   { name: '3', value: '3' },
                //                   { name: '4', value: '4' },
                //                   { name: '5', value: '5' },
                //                   { name: '6', value: '6' },
                //                   { name: '7', value: '7' },
                //                   { name: '8', value: '8' },
                //                   { name: '9', value: '9' },
                //                   { name: '10', value: '10' },
                //                   { name: '11', value: '11' },
                //                   { name: '12', value: '12' },
                //                 ],
                //               },
                //             },
                //             {
                //               value: '12',
                //               label: 'Column width (mobile)',
                //               key: 'columnWidthMobile',
                //               type: 'CUSTOM',
                //               configuration: {
                //                 as: 'DROPDOWN',
                //                 dataType: 'string',
                //                 allowedInput: [
                //                   { name: 'Fit content', value: 'fitContent' },
                //                   { name: 'Flexible', value: 'flexible' },
                //                   { name: 'Hidden', value: 'hidden' },
                //                   { name: '1', value: '1' },
                //                   { name: '2', value: '2' },
                //                   { name: '3', value: '3' },
                //                   { name: '4', value: '4' },
                //                   { name: '5', value: '5' },
                //                   { name: '6', value: '6' },
                //                   { name: '7', value: '7' },
                //                   { name: '8', value: '8' },
                //                   { name: '9', value: '9' },
                //                   { name: '10', value: '10' },
                //                   { name: '11', value: '11' },
                //                   { name: '12', value: '12' },
                //                 ],
                //               },
                //             },
                //             {
                //               value: '',
                //               label: 'Height',
                //               key: 'columnHeight',
                //               type: 'TEXT',
                //               configuration: {
                //                 as: 'UNIT',
                //               },
                //             },
                //             {
                //               value: 'transparent',
                //               label: 'Background color',
                //               key: 'backgroundColor',
                //               type: 'COLOR',
                //             },
                //             {
                //               type: 'CUSTOM',
                //               label: 'Horizontal Alignment',
                //               key: 'horizontalAlignment',
                //               value: 'inherit',
                //               configuration: {
                //                 as: 'BUTTONGROUP',
                //                 dataType: 'string',
                //                 allowedInput: [
                //                   { name: 'None', value: 'inherit' },
                //                   { name: 'Left', value: 'flex-start' },
                //                   { name: 'Center', value: 'center' },
                //                   { name: 'Right', value: 'flex-end' },
                //                 ],
                //               },
                //             },
                //             {
                //               type: 'CUSTOM',
                //               label: 'Vertical Alignment',
                //               key: 'verticalAlignment',
                //               value: 'inherit',
                //               configuration: {
                //                 as: 'BUTTONGROUP',
                //                 dataType: 'string',
                //                 allowedInput: [
                //                   { name: 'None', value: 'inherit' },
                //                   { name: 'Top', value: 'flex-start' },
                //                   { name: 'Center', value: 'center' },
                //                   { name: 'Bottom', value: 'flex-end' },
                //                 ],
                //               },
                //             },
                //             {
                //               value: ['0rem', '0rem', '0rem', '0rem'],
                //               label: 'Outer space',
                //               key: 'outerSpacing',
                //               type: 'SIZES',
                //             },
                //             {
                //               value: ['M', 'M', 'M', 'M'],
                //               label: 'Inner space',
                //               key: 'innerSpacing',
                //               type: 'SIZES',
                //             },
                //             {
                //               value: false,
                //               label: 'Advanced settings',
                //               key: 'advancedSettings',
                //               type: 'TOGGLE',
                //             },
                //             {
                //               type: 'VARIABLE',
                //               label: 'Test attribute',
                //               key: 'dataComponentAttribute',
                //               value: ['Column'],
                //               configuration: {
                //                 condition: {
                //                   type: 'SHOW',
                //                   option: 'advancedSettings',
                //                   comparator: 'EQ',
                //                   value: true,
                //                 },
                //               },
                //             },
                //           ],
                //           descendants: [
                //             {
                //               ref: {
                //                 id: '#componentId3',
                //               },
                //               name: 'Text',
                //               options: [
                //                 {
                //                   ref: {
                //                     id: '#componentId3OptionId1',
                //                   },
                //                   type: 'VARIABLE',
                //                   label: 'Content',
                //                   key: 'content',
                //                   value: ['inside the nested wrapper :D'],
                //                   configuration: {
                //                     as: 'MULTILINE',
                //                   },
                //                 },
                //                 {
                //                   type: 'TOGGLE',
                //                   label: 'Display Rich Text',
                //                   key: 'useInnerHtml',
                //                   value: false,
                //                 },
                //                 {
                //                   value: 'Body1',
                //                   label: 'Type',
                //                   key: 'type',
                //                   type: 'FONT',
                //                 },
                //                 {
                //                   type: 'CUSTOM',
                //                   label: 'Text Alignment',
                //                   key: 'textAlignment',
                //                   value: 'left',
                //                   configuration: {
                //                     as: 'BUTTONGROUP',
                //                     dataType: 'string',
                //                     allowedInput: [
                //                       { name: 'Left', value: 'left' },
                //                       { name: 'Center', value: 'center' },
                //                       { name: 'Right', value: 'right' },
                //                     ],
                //                   },
                //                 },
                //                 {
                //                   value: ['0rem', '0rem', '0rem', '0rem'],
                //                   label: 'Outer space',
                //                   key: 'outerSpacing',
                //                   type: 'SIZES',
                //                 },
                //                 {
                //                   type: 'CUSTOM',
                //                   label: 'Link to',
                //                   key: 'linkType',
                //                   value: 'internal',
                //                   configuration: {
                //                     as: 'BUTTONGROUP',
                //                     dataType: 'string',
                //                     allowedInput: [
                //                       {
                //                         name: 'Internal page',
                //                         value: 'internal',
                //                       },
                //                       {
                //                         name: 'External page',
                //                         value: 'external',
                //                       },
                //                     ],
                //                   },
                //                 },
                //                 {
                //                   value: '_self',
                //                   label: 'Open in',
                //                   key: 'linkTarget',
                //                   type: 'CUSTOM',
                //                   configuration: {
                //                     as: 'BUTTONGROUP',
                //                     dataType: 'string',
                //                     allowedInput: [
                //                       { name: 'Current Tab', value: '_self' },
                //                       { name: 'New Tab', value: '_blank' },
                //                     ],
                //                   },
                //                 },
                //                 {
                //                   value: '',
                //                   label: 'Page',
                //                   key: 'linkTo',
                //                   type: 'ENDPOINT',
                //                   configuration: {
                //                     condition: {
                //                       type: 'SHOW',
                //                       option: 'linkType',
                //                       comparator: 'EQ',
                //                       value: 'internal',
                //                     },
                //                   },
                //                 },
                //                 {
                //                   value: [''],
                //                   label: 'URL',
                //                   key: 'linkToExternal',
                //                   type: 'VARIABLE',
                //                   configuration: {
                //                     placeholder:
                //                       'Starts with https:// or http://',
                //                     condition: {
                //                       type: 'SHOW',
                //                       option: 'linkType',
                //                       comparator: 'EQ',
                //                       value: 'external',
                //                     },
                //                   },
                //                 },
                //                 {
                //                   value: false,
                //                   label: 'Styles',
                //                   key: 'styles',
                //                   type: 'TOGGLE',
                //                 },
                //                 {
                //                   type: 'COLOR',
                //                   label: 'Text color',
                //                   key: 'textColor',
                //                   value: 'Black',
                //                   configuration: {
                //                     condition: {
                //                       type: 'SHOW',
                //                       option: 'styles',
                //                       comparator: 'EQ',
                //                       value: true,
                //                     },
                //                   },
                //                 },
                //                 {
                //                   type: 'CUSTOM',
                //                   label: 'Font weight',
                //                   key: 'fontWeight',
                //                   value: '400',
                //                   configuration: {
                //                     as: 'DROPDOWN',
                //                     dataType: 'string',
                //                     allowedInput: [
                //                       { name: '100', value: '100' },
                //                       { name: '200', value: '200' },
                //                       { name: '300', value: '300' },
                //                       { name: '400', value: '400' },
                //                       { name: '500', value: '500' },
                //                       { name: '600', value: '600' },
                //                       { name: '700', value: '700' },
                //                       { name: '800', value: '800' },
                //                       { name: '900', value: '900' },
                //                     ],
                //                     condition: {
                //                       type: 'SHOW',
                //                       option: 'styles',
                //                       comparator: 'EQ',
                //                       value: true,
                //                     },
                //                   },
                //                 },
                //                 {
                //                   value: false,
                //                   label: 'Advanced settings',
                //                   key: 'advancedSettings',
                //                   type: 'TOGGLE',
                //                 },
                //                 {
                //                   type: 'VARIABLE',
                //                   label: 'Test attribute',
                //                   key: 'dataComponentAttribute',
                //                   value: ['Text'],
                //                   configuration: {
                //                     condition: {
                //                       type: 'SHOW',
                //                       option: 'advancedSettings',
                //                       comparator: 'EQ',
                //                       value: true,
                //                     },
                //                   },
                //                 },
                //               ],
                //               descendants: [],
                //             },
                //           ],
                //         },
                //       ],
                //     },
                //   ],
                // },
              ],
            },
            {
              name: 'Column',
              options: [
                {
                  label: 'Toggle visibility',
                  key: 'visible',
                  value: true,
                  type: 'TOGGLE',
                  configuration: {
                    as: 'VISIBILITY',
                  },
                },
                {
                  value: '4',
                  label: 'Column width',
                  key: 'columnWidth',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '4',
                  label: 'Column width (tablet landscape)',
                  key: 'columnWidthTabletLandscape',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '12',
                  label: 'Column width (tablet portrait)',
                  key: 'columnWidthTabletPortrait',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '12',
                  label: 'Column width (mobile)',
                  key: 'columnWidthMobile',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '',
                  label: 'Height',
                  key: 'columnHeight',
                  type: 'TEXT',
                  configuration: {
                    as: 'UNIT',
                  },
                },
                {
                  value: 'transparent',
                  label: 'Background color',
                  key: 'backgroundColor',
                  type: 'COLOR',
                },
                {
                  type: 'CUSTOM',
                  label: 'Horizontal Alignment',
                  key: 'horizontalAlignment',
                  value: 'inherit',
                  configuration: {
                    as: 'BUTTONGROUP',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'None', value: 'inherit' },
                      { name: 'Left', value: 'flex-start' },
                      { name: 'Center', value: 'center' },
                      { name: 'Right', value: 'flex-end' },
                    ],
                  },
                },
                {
                  type: 'CUSTOM',
                  label: 'Vertical Alignment',
                  key: 'verticalAlignment',
                  value: 'inherit',
                  configuration: {
                    as: 'BUTTONGROUP',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'None', value: 'inherit' },
                      { name: 'Top', value: 'flex-start' },
                      { name: 'Center', value: 'center' },
                      { name: 'Bottom', value: 'flex-end' },
                    ],
                  },
                },
                {
                  value: ['0rem', '0rem', '0rem', '0rem'],
                  label: 'Outer space',
                  key: 'outerSpacing',
                  type: 'SIZES',
                },
                {
                  value: ['M', 'M', 'M', 'M'],
                  label: 'Inner space',
                  key: 'innerSpacing',
                  type: 'SIZES',
                },
                {
                  value: false,
                  label: 'Advanced settings',
                  key: 'advancedSettings',
                  type: 'TOGGLE',
                },
                {
                  type: 'VARIABLE',
                  label: 'Test attribute',
                  key: 'dataComponentAttribute',
                  value: ['Column'],
                  configuration: {
                    condition: {
                      type: 'SHOW',
                      option: 'advancedSettings',
                      comparator: 'EQ',
                      value: true,
                    },
                  },
                },
              ],
              descendants: [],
            },
            {
              name: 'Column',
              options: [
                {
                  label: 'Toggle visibility',
                  key: 'visible',
                  value: true,
                  type: 'TOGGLE',
                  configuration: {
                    as: 'VISIBILITY',
                  },
                },
                {
                  value: '4',
                  label: 'Column width',
                  key: 'columnWidth',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '4',
                  label: 'Column width (tablet landscape)',
                  key: 'columnWidthTabletLandscape',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '12',
                  label: 'Column width (tablet portrait)',
                  key: 'columnWidthTabletPortrait',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '12',
                  label: 'Column width (mobile)',
                  key: 'columnWidthMobile',
                  type: 'CUSTOM',
                  configuration: {
                    as: 'DROPDOWN',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Fit content', value: 'fitContent' },
                      { name: 'Flexible', value: 'flexible' },
                      { name: 'Hidden', value: 'hidden' },
                      { name: '1', value: '1' },
                      { name: '2', value: '2' },
                      { name: '3', value: '3' },
                      { name: '4', value: '4' },
                      { name: '5', value: '5' },
                      { name: '6', value: '6' },
                      { name: '7', value: '7' },
                      { name: '8', value: '8' },
                      { name: '9', value: '9' },
                      { name: '10', value: '10' },
                      { name: '11', value: '11' },
                      { name: '12', value: '12' },
                    ],
                  },
                },
                {
                  value: '',
                  label: 'Height',
                  key: 'columnHeight',
                  type: 'TEXT',
                  configuration: {
                    as: 'UNIT',
                  },
                },
                {
                  value: 'transparent',
                  label: 'Background color',
                  key: 'backgroundColor',
                  type: 'COLOR',
                },
                {
                  type: 'CUSTOM',
                  label: 'Horizontal Alignment',
                  key: 'horizontalAlignment',
                  value: 'inherit',
                  configuration: {
                    as: 'BUTTONGROUP',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'None', value: 'inherit' },
                      { name: 'Left', value: 'flex-start' },
                      { name: 'Center', value: 'center' },
                      { name: 'Right', value: 'flex-end' },
                    ],
                  },
                },
                {
                  type: 'CUSTOM',
                  label: 'Vertical Alignment',
                  key: 'verticalAlignment',
                  value: 'inherit',
                  configuration: {
                    as: 'BUTTONGROUP',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'None', value: 'inherit' },
                      { name: 'Top', value: 'flex-start' },
                      { name: 'Center', value: 'center' },
                      { name: 'Bottom', value: 'flex-end' },
                    ],
                  },
                },
                {
                  value: ['0rem', '0rem', '0rem', '0rem'],
                  label: 'Outer space',
                  key: 'outerSpacing',
                  type: 'SIZES',
                },
                {
                  value: ['M', 'M', 'M', 'M'],
                  label: 'Inner space',
                  key: 'innerSpacing',
                  type: 'SIZES',
                },
                {
                  value: false,
                  label: 'Advanced settings',
                  key: 'advancedSettings',
                  type: 'TOGGLE',
                },
                {
                  type: 'VARIABLE',
                  label: 'Test attribute',
                  key: 'dataComponentAttribute',
                  value: ['Column'],
                  configuration: {
                    condition: {
                      type: 'SHOW',
                      option: 'advancedSettings',
                      comparator: 'EQ',
                      value: true,
                    },
                  },
                },
              ],
              descendants: [],
            },
          ],
        },
      ],
    },
  ],
}))();
