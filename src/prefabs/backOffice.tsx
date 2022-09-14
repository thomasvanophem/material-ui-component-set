import * as React from 'react';

import {
  prefab,
  Icon,
  toggle,
  sizes,
  showIf,
  variable,
  option,
  icon,
  ThemeColor,
  color,
  size,
  buttongroup,
  font,
  hideIf,
  text,
  PrefabReference,
  component,
  PrefabInteraction,
  PrefabComponentOption,
  InteractionType,
  BeforeCreateArgs,
  PrefabComponent,
  wrapper,
  linked,
  childSelector,
} from '@betty-blocks/component-sdk';

import {
  Box,
  boxOptions,
  Button,
  buttonOptions,
  Column,
  columnOptions,
  Conditional,
  conditionalOptions,
  DataContainer,
  DataTable,
  dataTableOptions,
  Dialog,
  dialogOptions,
  Drawer,
  DrawerBar,
  drawerBarOptions,
  DrawerContainer,
  drawerContainerOptions,
  drawerOptions,
  FormErrorAlert,
  Grid,
  gridOptions,
  List,
  ListItem,
  listItemOptions,
  listOptions,
  Media,
  mediaOptions,
  Paper,
  Row,
  rowOptions,
  SubmitButton,
  submitButtonOptions,
  Tab,
  tabOptions,
  Tabs,
  tabsOptions,
  Text,
  textOptions,
} from './structures';
import { options as defaults } from './structures/ActionJSForm/options';
import { Properties, IdPropertyProps, ModelProps, ModelQuery } from './types';

const interactions: PrefabInteraction[] = [
  {
    name: 'Show',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#deleteDialog',
      sourceComponentId: '#deleteButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#deleteDialog',
      sourceComponentId: '#closeBtn',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#deleteDialog',
      sourceComponentId: '#cancelButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'onActionSuccess',
    ref: {
      targetComponentId: '#deleteDialog',
      sourceComponentId: '#deleteForm',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Refetch',
    sourceEvent: 'onActionSuccess',
    ref: {
      targetComponentId: '#dataTable',
      sourceComponentId: '#deleteForm',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Refetch',
    sourceEvent: 'onActionSuccess',
    ref: {
      targetComponentId: '#dataTable',
      sourceComponentId: '#createForm',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'onActionSuccess',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#createForm',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Refetch',
    sourceEvent: 'onActionSuccess',
    ref: {
      targetComponentId: '#dataTable',
      sourceComponentId: '#editForm',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'onActionSuccess',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#editForm',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'onSubmit',
    ref: {
      targetComponentId: '#editErrorAlert',
      sourceComponentId: '#editForm',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Show',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#detailButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#editCancelButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#createCancelButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Select',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#detailTab',
      sourceComponentId: '#detailButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Show',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#createButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Show',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#editButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Select',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#createTab',
      sourceComponentId: '#createButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Select',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#editTab',
      sourceComponentId: '#editButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Select',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#editTab',
      sourceComponentId: '#editButtonFromDetails',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#detailCancelButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#closeEditTabBtn',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#closeCreateTabBtn',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Hide',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#drawerSidebar',
      sourceComponentId: '#closeDetailsTabBtn',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Submit',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#createForm',
      sourceComponentId: '#createSubmitButton',
    },
    type: InteractionType.Custom,
  },
  {
    name: 'Submit',
    sourceEvent: 'Click',
    ref: {
      targetComponentId: '#editForm',
      sourceComponentId: '#editSubmitButton',
    },
    type: InteractionType.Custom,
  },
];

const attributes = {
  category: 'FORMV2',
  icon: Icon.UpdateFormIcon,
  type: 'page',
  description:
    'This page contains a datatable and all you need to manage your records.',
  detail:
    'In this ready to use Data Table, it is possible to create, display (read), update and delete records. These functionalities are shown in a slide-out panel.',
  previewUrl: 'https://preview.betty.app/back-office',
  previewImage:
    'https://assets.bettyblocks.com/efaf005f4d3041e5bdfdd0643d1f190d_assets/files/Page_Template_Back_Office.jpg',
  interactions,
};

const sideMenu = Box(
  {
    options: {
      ...boxOptions,
      stretch: toggle('Stretch (when in flex container)', {
        value: true,
      }),
      innerSpacing: sizes('Inner space', {
        value: ['0rem', '0rem', '0rem', '0rem'],
      }),
      backgroundColor: color('Background color', {
        value: ThemeColor.PRIMARY,
      }),
    },
  },
  [
    Box(
      {
        options: {
          ...boxOptions,
          stretch: toggle('Stretch (when in flex container)', {
            value: true,
          }),
          innerSpacing: sizes('Inner space', {
            value: ['0rem', '0rem', '0rem', '0rem'],
          }),
        },
      },
      [
        Box(
          {
            options: {
              ...boxOptions,
              innerSpacing: sizes('Inner space', {
                value: ['L', 'L', '0rem', 'L'],
              }),
            },
          },
          [
            Media(
              {
                options: {
                  ...mediaOptions,
                  type: option('CUSTOM', {
                    label: 'Media type',
                    value: 'url',
                    configuration: {
                      as: 'BUTTONGROUP',
                      dataType: 'string',
                      allowedInput: [
                        { name: 'Image', value: 'img' },
                        { name: 'Data', value: 'data' },
                        { name: 'Video', value: 'video' },
                        { name: 'URL', value: 'url' },
                        { name: 'I-frame', value: 'iframe' },
                      ],
                    },
                  }),
                  urlFileSource: variable('Source', {
                    value: [
                      'https://assets.bettyblocks.com/efaf005f4d3041e5bdfdd0643d1f190d_assets/files/Your_Logo_-_W.svg',
                    ],
                    configuration: {
                      placeholder: 'Starts with https:// or http://',
                      as: 'MULTILINE',
                      condition: showIf('type', 'EQ', 'url'),
                    },
                  }),
                },
              },
              [],
            ),
          ],
        ),
        Box(
          {
            options: {
              ...boxOptions,
              stretch: toggle('Stretch (when in flex container)', {
                value: true,
              }),
              innerSpacing: sizes('Inner space', {
                value: ['0rem', '0rem', '0rem', '0rem'],
              }),
            },
          },
          [
            List(
              {
                options: {
                  ...listOptions,
                  disablePadding: toggle('Disable padding', { value: false }),
                },
              },
              [
                ListItem(
                  {
                    options: {
                      ...listItemOptions,
                      primaryText: variable('Primary text', {
                        value: ['First list item'],
                      }),
                      avatarOrIcon: option('CUSTOM', {
                        label: 'Visual',
                        value: 'icon',
                        configuration: {
                          as: 'BUTTONGROUP',
                          dataType: 'string',
                          allowedInput: [
                            { name: 'None', value: 'none' },
                            { name: 'Icon', value: 'icon' },
                            { name: 'Avatar', value: 'avatar' },
                          ],
                        },
                      }),
                      icon: icon('Icon', {
                        value: 'Apartment',
                        configuration: {
                          condition: showIf('avatarOrIcon', 'EQ', 'icon'),
                        },
                      }),
                      selected: toggle('Selected', { value: true }),
                      titleColor: color('Title color', {
                        value: ThemeColor.WHITE,
                      }),
                      iconColor: color('Icon color', {
                        value: ThemeColor.WHITE,
                        configuration: {
                          condition: showIf('avatarOrIcon', 'EQ', 'icon'),
                        },
                      }),
                    },
                  },
                  [],
                ),
                ListItem(
                  {
                    options: {
                      ...listItemOptions,
                      primaryText: variable('Primary text', {
                        value: ['Second list item'],
                      }),
                      avatarOrIcon: option('CUSTOM', {
                        label: 'Visual',
                        value: 'icon',
                        configuration: {
                          as: 'BUTTONGROUP',
                          dataType: 'string',
                          allowedInput: [
                            { name: 'None', value: 'none' },
                            { name: 'Icon', value: 'icon' },
                            { name: 'Avatar', value: 'avatar' },
                          ],
                        },
                      }),
                      titleColor: color('Title color', {
                        value: ThemeColor.WHITE,
                      }),
                      iconColor: color('Icon color', {
                        value: ThemeColor.WHITE,
                        configuration: {
                          condition: showIf('avatarOrIcon', 'EQ', 'icon'),
                        },
                      }),
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
  ],
);

const drawerContainer = DrawerContainer(
  {
    label: 'Backoffice - Content',
    options: {
      ...drawerContainerOptions,
      innerSpacing: sizes('Inner space', {
        value: ['0rem', '0rem', '0rem', '0rem'],
      }),
    },
  },
  [
    wrapper(
      {
        label: 'Overview + Record view',
        optionCategories: [
          {
            label: 'Page title',
            expanded: true,
            members: ['pageTitle'],
            condition: {
              type: 'SHOW',
              option: 'visibility',
              comparator: 'EQ',
              value: false,
            },
          },
          {
            label: 'Tab title',
            expanded: true,
            members: ['detailsTabTitle', 'updateTabTitle', 'createTabTitle'],
            condition: {
              type: 'SHOW',
              option: 'visibility',
              comparator: 'EQ',
              value: true,
            },
          },
        ],
        options: {
          visibility: linked({
            label: 'Page view',
            configuration: {
              as: 'BUTTONGROUP',
              dataType: 'boolean',
              allowedInput: [
                { name: 'Overview', value: false },
                { name: 'Record view', value: true },
              ],
            },
            value: {
              ref: {
                componentId: '#contentContainer',
                optionId: '#contentContainerVisibility',
              },
            },
          }),
          pageTitle: linked({
            label: 'Page title',
            value: {
              ref: {
                componentId: '#pageTitle',
                optionId: '#pageTitleContent',
              },
            },
          }),
          shownTab: linked({
            label: 'Show design tab',
            value: {
              ref: {
                componentId: '#drawerTabs',
                optionId: '#drawerTabsSelectedDesignTabIndex',
              },
            },
            configuration: {
              condition: {
                type: 'SHOW',
                option: 'visibility',
                comparator: 'EQ',
                value: true,
              },
            },
          }),
          createTabTitle: linked({
            label: 'Create tab title',
            value: {
              ref: {
                componentId: '#createTabTitle',
                optionId: '#createTabTitleContent',
              },
            },
            configuration: {
              condition: {
                type: 'SHOW',
                option: 'shownTab',
                comparator: 'EQ',
                value: 1,
              },
            },
          }),
          detailsTabTitle: linked({
            label: 'Details tab title',
            value: {
              ref: {
                componentId: '#detailsTabTitle',
                optionId: '#detailsTabTitleContent',
              },
            },
            configuration: {
              condition: {
                type: 'SHOW',
                option: 'shownTab',
                comparator: 'EQ',
                value: 2,
              },
            },
          }),
          updateTabTitle: linked({
            label: 'Update tab title',
            value: {
              ref: {
                componentId: '#updateTabTitle',
                optionId: '#updateTabTitleContent',
              },
            },
            configuration: {
              condition: {
                type: 'SHOW',
                option: 'shownTab',
                comparator: 'EQ',
                value: 3,
              },
            },
          }),
        },
      },
      [
        Drawer(
          {
            ref: {
              id: '#contentContainer',
            },
            options: {
              ...drawerOptions,
              visibility: toggle('Toggle visibility', {
                value: false,
                configuration: {
                  as: 'VISIBILITY',
                },
                ref: {
                  id: '#contentContainerVisibility',
                },
              }),
              drawerType: option('CUSTOM', {
                value: 'temporary',
                label: 'Drawer type',
                configuration: {
                  as: 'BUTTONGROUP',
                  dataType: 'string',
                  allowedInput: [
                    { name: 'Persistent', value: 'persistent' },
                    { name: 'Temporary', value: 'temporary' },
                  ],
                },
              }),
              temporaryAnchor: option('CUSTOM', {
                value: 'right',
                label: 'Alignment',
                configuration: {
                  as: 'BUTTONGROUP',
                  dataType: 'string',
                  allowedInput: [
                    { name: 'Left', value: 'left' },
                    { name: 'Top', value: 'top' },
                    { name: 'Right', value: 'right' },
                    { name: 'Bottom', value: 'bottom' },
                  ],
                  condition: showIf('drawerType', 'EQ', 'temporary'),
                },
              }),
              drawerWidth: size('Drawer Width', {
                value: '480px',
                configuration: {
                  as: 'UNIT',
                },
              }),
            },
          },
          [
            DrawerBar(
              {
                options: {
                  ...drawerBarOptions,
                  innerSpacing: sizes('Inner space', {
                    value: ['0rem', '0rem', '0rem', '0rem'],
                  }),
                },
                ref: { id: '#drawerSidebar' },
              },
              [
                Box(
                  {
                    options: {
                      ...boxOptions,
                      height: size('Height', {
                        value: '100%',
                        configuration: {
                          as: 'UNIT',
                        },
                      }),
                      innerSpacing: sizes('Inner space', {
                        value: ['0rem', '0rem', '0rem', '0rem'],
                      }),
                    },
                  },
                  [
                    Tabs(
                      {
                        ref: {
                          id: '#drawerTabs',
                        },
                        options: {
                          ...tabsOptions,
                          selectedDesignTabIndex: childSelector(
                            'Selected tab (design)',
                            {
                              value: 1,
                              ref: {
                                id: '#drawerTabsSelectedDesignTabIndex',
                              },
                            },
                          ),
                          height: size('Height', {
                            value: '100%',
                            configuration: {
                              as: 'UNIT',
                            },
                          }),
                          hideTabs: toggle('Hide visual tabs', { value: true }),
                        },
                      },
                      [
                        Tab(
                          {
                            label: 'Create',
                            options: {
                              ...tabOptions,
                              label: variable('Tab label', {
                                value: ['CreateTab'],
                              }),
                              height: size('Height', {
                                value: '100%',
                                configuration: {
                                  as: 'UNIT',
                                },
                              }),
                            },
                            ref: { id: '#createTab' },
                          },
                          [
                            Grid(
                              {
                                options: {
                                  ...gridOptions,
                                  height: size('Height', {
                                    value: '100%',
                                    configuration: {
                                      as: 'UNIT',
                                    },
                                  }),
                                },
                              },
                              [
                                Grid(
                                  {
                                    options: {
                                      ...gridOptions,
                                      direction: option('CUSTOM', {
                                        value: 'column',
                                        label: 'Direction',
                                        configuration: {
                                          as: 'BUTTONGROUP',
                                          dataType: 'string',
                                          allowedInput: [
                                            {
                                              name: 'Horizontal',
                                              value: 'row',
                                            },
                                            {
                                              name: 'Vertical',
                                              value: 'column',
                                            },
                                          ],
                                          condition: showIf(
                                            'type',
                                            'EQ',
                                            'container',
                                          ),
                                        },
                                      }),
                                    },
                                  },
                                  [
                                    Box(
                                      {
                                        options: {
                                          ...boxOptions,
                                          alignment: buttongroup(
                                            'Alignment',
                                            [
                                              ['None', 'none'],
                                              ['Left', 'flex-start'],
                                              ['Center', 'center'],
                                              ['Right', 'flex-end'],
                                              ['Justified', 'space-between'],
                                            ],
                                            {
                                              value: 'space-between',
                                              configuration: {
                                                dataType: 'string',
                                              },
                                            },
                                          ),
                                          valignment: buttongroup(
                                            'Vertical alignment',
                                            [
                                              ['None', 'none'],
                                              ['Top', 'flex-start'],
                                              ['Center', 'center'],
                                              ['Bottom', 'flex-end'],
                                            ],
                                            {
                                              value: 'center',
                                              configuration: {
                                                dataType: 'string',
                                              },
                                            },
                                          ),
                                          backgroundColor: color(
                                            'Background color',
                                            {
                                              value: ThemeColor.PRIMARY,
                                            },
                                          ),
                                        },
                                      },
                                      [
                                        Text(
                                          {
                                            ref: {
                                              id: '#createTabTitle',
                                            },
                                            options: {
                                              ...textOptions,
                                              content: variable('Content', {
                                                value: ['Create'],
                                                configuration: {
                                                  as: 'MULTILINE',
                                                },
                                                ref: {
                                                  id: '#createTabTitleContent',
                                                },
                                              }),
                                              type: font('Font', {
                                                value: ['Title5'],
                                              }),
                                              textColor: color('Text color', {
                                                value: ThemeColor.WHITE,
                                              }),
                                            },
                                          },
                                          [],
                                        ),
                                        Button(
                                          {
                                            options: {
                                              ...buttonOptions,
                                              buttonText: variable(
                                                'Button text',
                                                {
                                                  value: [''],
                                                },
                                              ),
                                              icon: icon('Icon', {
                                                value: 'Close',
                                              }),
                                              size: option('CUSTOM', {
                                                value: 'medium',
                                                label: 'Icon size',
                                                configuration: {
                                                  as: 'BUTTONGROUP',
                                                  dataType: 'string',
                                                  allowedInput: [
                                                    {
                                                      name: 'Small',
                                                      value: 'small',
                                                    },
                                                    {
                                                      name: 'Medium',
                                                      value: 'medium',
                                                    },
                                                    {
                                                      name: 'Large',
                                                      value: 'large',
                                                    },
                                                  ],
                                                  condition: hideIf(
                                                    'icon',
                                                    'EQ',
                                                    'none',
                                                  ),
                                                },
                                              }),
                                            },
                                            ref: { id: '#closeCreateTabBtn' },
                                            style: {
                                              overwrite: {
                                                backgroundColor: {
                                                  type: 'STATIC',
                                                  value: 'Transparent',
                                                },
                                                boxShadow: 'none',
                                                color: {
                                                  type: 'THEME_COLOR',
                                                  value: 'white',
                                                },
                                                padding: ['0rem'],
                                              },
                                            },
                                          },
                                          [],
                                        ),
                                      ],
                                    ),
                                    Box(
                                      {
                                        options: {
                                          ...boxOptions,
                                          stretch: toggle(
                                            'Stretch (when in flex container)',
                                            {
                                              value: true,
                                            },
                                          ),
                                        },
                                        ref: { id: '#createFormBox' },
                                      },
                                      [
                                        component(
                                          'Form Beta',
                                          {
                                            label: 'Create Form Beta',
                                            options: defaults,
                                            ref: { id: '#createForm' },
                                          },
                                          [
                                            FormErrorAlert({
                                              ref: {
                                                id: '#createAlertErrorId',
                                              },
                                            }),
                                          ],
                                        ),
                                      ],
                                    ),
                                    Box(
                                      {
                                        options: {
                                          ...boxOptions,
                                          alignment: buttongroup(
                                            'Alignment',
                                            [
                                              ['None', 'none'],
                                              ['Left', 'flex-start'],
                                              ['Center', 'center'],
                                              ['Right', 'flex-end'],
                                              ['Justified', 'space-between'],
                                            ],
                                            {
                                              value: 'space-between',
                                              configuration: {
                                                dataType: 'string',
                                              },
                                            },
                                          ),
                                          backgroundColor: color(
                                            'Background color',
                                            {
                                              value: ThemeColor.LIGHT,
                                            },
                                          ),
                                          backgroundColorAlpha: option(
                                            'NUMBER',
                                            {
                                              label: 'Background color opacity',
                                              value: 20,
                                            },
                                          ),
                                        },
                                      },
                                      [
                                        Button(
                                          {
                                            options: {
                                              ...buttonOptions,
                                              buttonText: variable(
                                                'Button text',
                                                {
                                                  value: ['Cancel'],
                                                },
                                              ),
                                              outerSpacing: sizes(
                                                'Outer space',
                                                {
                                                  value: [
                                                    '0rem',
                                                    'S',
                                                    '0rem',
                                                    '0rem',
                                                  ],
                                                },
                                              ),
                                            },
                                            ref: { id: '#createCancelButton' },
                                            style: {
                                              overwrite: {
                                                backgroundColor: {
                                                  type: 'STATIC',
                                                  value: 'transparent',
                                                },
                                                borderColor: {
                                                  type: 'THEME_COLOR',
                                                  value: 'primary',
                                                },
                                                borderRadius: ['0.25rem'],
                                                borderStyle: 'solid',
                                                borderWidth: ['0.0625rem'],
                                                boxShadow: 'none',
                                                color: {
                                                  type: 'THEME_COLOR',
                                                  value: 'primary',
                                                },
                                                fontFamily: 'Roboto',
                                                fontSize: '0.875rem',
                                                fontStyle: 'none',
                                                fontWeight: '400',
                                                padding: [
                                                  '0.625rem',
                                                  '1.3125rem',
                                                ],
                                                textDecoration: 'none',
                                                textTransform: 'none',
                                              },
                                            },
                                          },
                                          [],
                                        ),
                                        SubmitButton(
                                          {
                                            options: {
                                              ...submitButtonOptions,
                                              buttonText: variable(
                                                'Button text',
                                                {
                                                  value: ['Save'],
                                                },
                                              ),
                                              icon: icon('Icon', {
                                                value: 'Save',
                                              }),
                                            },
                                            ref: { id: '#createSubmitButton' },
                                            style: {
                                              overwrite: {
                                                backgroundColor: {
                                                  type: 'THEME_COLOR',
                                                  value: 'primary',
                                                },
                                                boxShadow: 'none',
                                                color: {
                                                  type: 'THEME_COLOR',
                                                  value: 'white',
                                                },
                                                fontFamily: 'Roboto',
                                                fontSize: '0.875rem',
                                                fontStyle: 'none',
                                                fontWeight: '400',
                                                padding: [
                                                  '0.6875rem',
                                                  '1.375rem',
                                                ],
                                                textDecoration: 'none',
                                                textTransform: 'none',
                                              },
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
                          ],
                        ),
                        Tab(
                          {
                            label: 'Details',
                            options: {
                              ...tabOptions,
                              label: variable('Tab label', {
                                value: ['DetailsTab'],
                              }),
                              height: size('Height', {
                                value: '100%',
                                configuration: {
                                  as: 'UNIT',
                                },
                              }),
                            },
                            ref: { id: '#detailTab' },
                          },
                          [
                            Grid(
                              {
                                options: {
                                  ...gridOptions,
                                  height: size('Height', {
                                    value: '100%',
                                    configuration: {
                                      as: 'UNIT',
                                    },
                                  }),
                                },
                              },
                              [
                                Grid(
                                  {
                                    options: {
                                      ...gridOptions,
                                      direction: option('CUSTOM', {
                                        value: 'column',
                                        label: 'Direction',
                                        configuration: {
                                          as: 'BUTTONGROUP',
                                          dataType: 'string',
                                          allowedInput: [
                                            {
                                              name: 'Horizontal',
                                              value: 'row',
                                            },
                                            {
                                              name: 'Vertical',
                                              value: 'column',
                                            },
                                          ],
                                          condition: showIf(
                                            'type',
                                            'EQ',
                                            'container',
                                          ),
                                        },
                                      }),
                                    },
                                  },
                                  [
                                    Box(
                                      {
                                        options: {
                                          ...boxOptions,
                                          alignment: buttongroup(
                                            'Alignment',
                                            [
                                              ['None', 'none'],
                                              ['Left', 'flex-start'],
                                              ['Center', 'center'],
                                              ['Right', 'flex-end'],
                                              ['Justified', 'space-between'],
                                            ],
                                            {
                                              value: 'space-between',
                                              configuration: {
                                                dataType: 'string',
                                              },
                                            },
                                          ),
                                          valignment: buttongroup(
                                            'Vertical alignment',
                                            [
                                              ['None', 'none'],
                                              ['Top', 'flex-start'],
                                              ['Center', 'center'],
                                              ['Bottom', 'flex-end'],
                                            ],
                                            {
                                              value: 'center',
                                              configuration: {
                                                dataType: 'string',
                                              },
                                            },
                                          ),
                                          backgroundColor: color(
                                            'Background color',
                                            {
                                              value: ThemeColor.PRIMARY,
                                            },
                                          ),
                                        },
                                      },
                                      [
                                        Text(
                                          {
                                            ref: {
                                              id: '#detailsTabTitle',
                                            },
                                            options: {
                                              ...textOptions,
                                              content: variable('Content', {
                                                value: ['Details'],
                                                configuration: {
                                                  as: 'MULTILINE',
                                                },
                                                ref: {
                                                  id: '#detailsTabTitleContent',
                                                },
                                              }),
                                              type: font('Font', {
                                                value: ['Title5'],
                                              }),
                                              textColor: color('Text color', {
                                                value: ThemeColor.WHITE,
                                              }),
                                            },
                                          },
                                          [],
                                        ),
                                        Button(
                                          {
                                            options: {
                                              ...buttonOptions,
                                              buttonText: variable(
                                                'Button text',
                                                {
                                                  value: [''],
                                                },
                                              ),
                                              icon: icon('Icon', {
                                                value: 'Close',
                                              }),
                                              size: option('CUSTOM', {
                                                value: 'medium',
                                                label: 'Icon size',
                                                configuration: {
                                                  as: 'BUTTONGROUP',
                                                  dataType: 'string',
                                                  allowedInput: [
                                                    {
                                                      name: 'Small',
                                                      value: 'small',
                                                    },
                                                    {
                                                      name: 'Medium',
                                                      value: 'medium',
                                                    },
                                                    {
                                                      name: 'Large',
                                                      value: 'large',
                                                    },
                                                  ],
                                                  condition: hideIf(
                                                    'icon',
                                                    'EQ',
                                                    'none',
                                                  ),
                                                },
                                              }),
                                            },
                                            ref: { id: '#closeDetailsTabBtn' },
                                            style: {
                                              overwrite: {
                                                backgroundColor: {
                                                  type: 'STATIC',
                                                  value: 'Transparent',
                                                },
                                                boxShadow: 'none',
                                                color: {
                                                  type: 'THEME_COLOR',
                                                  value: 'white',
                                                },
                                                padding: ['0rem'],
                                              },
                                            },
                                          },
                                          [],
                                        ),
                                      ],
                                    ),
                                    Box(
                                      {
                                        options: {
                                          ...boxOptions,
                                          stretch: toggle(
                                            'Stretch (when in flex container)',
                                            {
                                              value: true,
                                            },
                                          ),
                                        },
                                        ref: { id: '#detailBox' },
                                      },
                                      [
                                        DataContainer(
                                          {
                                            ref: { id: '#detailDatacontainer' },
                                          },
                                          [],
                                        ),
                                      ],
                                    ),
                                    Box(
                                      {
                                        options: {
                                          ...boxOptions,
                                          alignment: buttongroup(
                                            'Alignment',
                                            [
                                              ['None', 'none'],
                                              ['Left', 'flex-start'],
                                              ['Center', 'center'],
                                              ['Right', 'flex-end'],
                                              ['Justified', 'space-between'],
                                            ],
                                            {
                                              value: 'space-between',
                                              configuration: {
                                                dataType: 'string',
                                              },
                                            },
                                          ),
                                          backgroundColor: color(
                                            'Background color',
                                            {
                                              value: ThemeColor.LIGHT,
                                            },
                                          ),
                                          backgroundColorAlpha: option(
                                            'NUMBER',
                                            {
                                              label: 'Background color opacity',
                                              value: 20,
                                            },
                                          ),
                                        },
                                      },
                                      [
                                        Button(
                                          {
                                            options: {
                                              ...buttonOptions,
                                              buttonText: variable(
                                                'Button text',
                                                {
                                                  value: ['Cancel'],
                                                },
                                              ),
                                            },
                                            ref: { id: '#detailCancelButton' },
                                            style: {
                                              overwrite: {
                                                backgroundColor: {
                                                  type: 'STATIC',
                                                  value: 'transparent',
                                                },
                                                borderColor: {
                                                  type: 'THEME_COLOR',
                                                  value: 'primary',
                                                },
                                                borderRadius: ['0.25rem'],
                                                borderStyle: 'solid',
                                                borderWidth: ['0.0625rem'],
                                                boxShadow: 'none',
                                                color: {
                                                  type: 'THEME_COLOR',
                                                  value: 'primary',
                                                },
                                                fontFamily: 'Roboto',
                                                fontSize: '0.875rem',
                                                fontStyle: 'none',
                                                fontWeight: '400',
                                                padding: [
                                                  '0.625rem',
                                                  '1.3125rem',
                                                ],
                                                textDecoration: 'none',
                                                textTransform: 'none',
                                              },
                                            },
                                          },
                                          [],
                                        ),
                                        Button(
                                          {
                                            options: {
                                              ...buttonOptions,
                                              buttonText: variable(
                                                'Button text',
                                                {
                                                  value: ['Edit'],
                                                },
                                              ),
                                              icon: icon('Icon', {
                                                value: 'Edit',
                                              }),
                                            },
                                            ref: {
                                              id: '#editButtonFromDetails',
                                            },
                                            style: {
                                              overwrite: {
                                                backgroundColor: {
                                                  type: 'THEME_COLOR',
                                                  value: 'primary',
                                                },
                                                boxShadow: 'none',
                                                color: {
                                                  type: 'THEME_COLOR',
                                                  value: 'white',
                                                },
                                                fontFamily: 'Roboto',
                                                fontSize: '0.875rem',
                                                fontStyle: 'none',
                                                fontWeight: '400',
                                                padding: [
                                                  '0.6875rem',
                                                  '1.375rem',
                                                ],
                                                textDecoration: 'none',
                                                textTransform: 'none',
                                              },
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
                          ],
                        ),
                        Tab(
                          {
                            label: 'Update',
                            options: {
                              ...tabOptions,
                              label: variable('Tab label', {
                                value: ['UpdateTab'],
                              }),
                              height: size('Height', {
                                value: '100%',
                                configuration: {
                                  as: 'UNIT',
                                },
                              }),
                            },
                            ref: { id: '#editTab' },
                          },
                          [
                            Grid(
                              {
                                options: {
                                  ...gridOptions,
                                  height: size('Height', {
                                    value: '100%',
                                    configuration: {
                                      as: 'UNIT',
                                    },
                                  }),
                                },
                              },
                              [
                                Grid(
                                  {
                                    options: {
                                      ...gridOptions,
                                      direction: option('CUSTOM', {
                                        value: 'column',
                                        label: 'Direction',
                                        configuration: {
                                          as: 'BUTTONGROUP',
                                          dataType: 'string',
                                          allowedInput: [
                                            {
                                              name: 'Horizontal',
                                              value: 'row',
                                            },
                                            {
                                              name: 'Vertical',
                                              value: 'column',
                                            },
                                          ],
                                          condition: showIf(
                                            'type',
                                            'EQ',
                                            'container',
                                          ),
                                        },
                                      }),
                                    },
                                  },
                                  [
                                    Box(
                                      {
                                        options: {
                                          ...boxOptions,
                                          alignment: buttongroup(
                                            'Alignment',
                                            [
                                              ['None', 'none'],
                                              ['Left', 'flex-start'],
                                              ['Center', 'center'],
                                              ['Right', 'flex-end'],
                                              ['Justified', 'space-between'],
                                            ],
                                            {
                                              value: 'space-between',
                                              configuration: {
                                                dataType: 'string',
                                              },
                                            },
                                          ),
                                          valignment: buttongroup(
                                            'Vertical alignment',
                                            [
                                              ['None', 'none'],
                                              ['Top', 'flex-start'],
                                              ['Center', 'center'],
                                              ['Bottom', 'flex-end'],
                                            ],
                                            {
                                              value: 'center',
                                              configuration: {
                                                dataType: 'string',
                                              },
                                            },
                                          ),
                                          backgroundColor: color(
                                            'Background color',
                                            {
                                              value: ThemeColor.PRIMARY,
                                            },
                                          ),
                                        },
                                      },
                                      [
                                        Text(
                                          {
                                            ref: {
                                              id: '#updateTabTitle',
                                            },
                                            options: {
                                              ...textOptions,
                                              content: variable('Content', {
                                                value: ['Update'],
                                                configuration: {
                                                  as: 'MULTILINE',
                                                },
                                                ref: {
                                                  id: '#updateTabTitleContent',
                                                },
                                              }),
                                              type: font('Font', {
                                                value: ['Title5'],
                                              }),
                                              textColor: color('Text color', {
                                                value: ThemeColor.WHITE,
                                              }),
                                            },
                                          },
                                          [],
                                        ),
                                        Button(
                                          {
                                            options: {
                                              ...buttonOptions,
                                              buttonText: variable(
                                                'Button text',
                                                {
                                                  value: [''],
                                                },
                                              ),
                                              icon: icon('Icon', {
                                                value: 'Close',
                                              }),
                                              size: option('CUSTOM', {
                                                value: 'medium',
                                                label: 'Icon size',
                                                configuration: {
                                                  as: 'BUTTONGROUP',
                                                  dataType: 'string',
                                                  allowedInput: [
                                                    {
                                                      name: 'Small',
                                                      value: 'small',
                                                    },
                                                    {
                                                      name: 'Medium',
                                                      value: 'medium',
                                                    },
                                                    {
                                                      name: 'Large',
                                                      value: 'large',
                                                    },
                                                  ],
                                                  condition: hideIf(
                                                    'icon',
                                                    'EQ',
                                                    'none',
                                                  ),
                                                },
                                              }),
                                            },
                                            ref: { id: '#closeEditTabBtn' },
                                            style: {
                                              overwrite: {
                                                backgroundColor: {
                                                  type: 'STATIC',
                                                  value: 'Transparent',
                                                },
                                                boxShadow: 'none',
                                                color: {
                                                  type: 'THEME_COLOR',
                                                  value: 'white',
                                                },
                                                padding: ['0rem'],
                                              },
                                            },
                                          },
                                          [],
                                        ),
                                      ],
                                    ),
                                    Box(
                                      {
                                        options: {
                                          ...boxOptions,
                                          stretch: toggle(
                                            'Stretch (when in flex container)',
                                            {
                                              value: true,
                                            },
                                          ),
                                        },
                                      },
                                      [
                                        component(
                                          'Form Beta',
                                          {
                                            label: 'Update Form Beta',
                                            options: defaults,
                                            ref: { id: '#editForm' },
                                          },
                                          [
                                            FormErrorAlert({
                                              ref: { id: '#editErrorAlert' },
                                            }),
                                          ],
                                        ),
                                      ],
                                    ),
                                    Box(
                                      {
                                        options: {
                                          ...boxOptions,
                                          alignment: buttongroup(
                                            'Alignment',
                                            [
                                              ['None', 'none'],
                                              ['Left', 'flex-start'],
                                              ['Center', 'center'],
                                              ['Right', 'flex-end'],
                                              ['Justified', 'space-between'],
                                            ],
                                            {
                                              value: 'space-between',
                                              configuration: {
                                                dataType: 'string',
                                              },
                                            },
                                          ),
                                          backgroundColor: color(
                                            'Background color',
                                            {
                                              value: ThemeColor.LIGHT,
                                            },
                                          ),
                                          backgroundColorAlpha: option(
                                            'NUMBER',
                                            {
                                              label: 'Background color opacity',
                                              value: 20,
                                            },
                                          ),
                                        },
                                      },
                                      [
                                        Button(
                                          {
                                            options: {
                                              ...buttonOptions,
                                              buttonText: variable(
                                                'Button text',
                                                {
                                                  value: ['Cancel'],
                                                },
                                              ),
                                              outerSpacing: sizes(
                                                'Outer space',
                                                {
                                                  value: [
                                                    '0rem',
                                                    'S',
                                                    '0rem',
                                                    '0rem',
                                                  ],
                                                },
                                              ),
                                            },
                                            ref: { id: '#editCancelButton' },
                                            style: {
                                              overwrite: {
                                                backgroundColor: {
                                                  type: 'STATIC',
                                                  value: 'transparent',
                                                },
                                                borderColor: {
                                                  type: 'THEME_COLOR',
                                                  value: 'primary',
                                                },
                                                borderRadius: ['0.25rem'],
                                                borderStyle: 'solid',
                                                borderWidth: ['0.0625rem'],
                                                boxShadow: 'none',
                                                color: {
                                                  type: 'THEME_COLOR',
                                                  value: 'primary',
                                                },
                                                fontFamily: 'Roboto',
                                                fontSize: '0.875rem',
                                                fontStyle: 'none',
                                                fontWeight: '400',
                                                padding: [
                                                  '0.625rem',
                                                  '1.3125rem',
                                                ],
                                                textDecoration: 'none',
                                                textTransform: 'none',
                                              },
                                            },
                                          },
                                          [],
                                        ),
                                        SubmitButton(
                                          {
                                            options: {
                                              ...submitButtonOptions,
                                              buttonText: variable(
                                                'Button text',
                                                {
                                                  value: ['Save'],
                                                },
                                              ),
                                              icon: icon('Icon', {
                                                value: 'Save',
                                              }),
                                            },
                                            ref: { id: '#editSubmitButton' },
                                            style: {
                                              overwrite: {
                                                backgroundColor: {
                                                  type: 'THEME_COLOR',
                                                  value: 'primary',
                                                },
                                                boxShadow: 'none',
                                                color: {
                                                  type: 'THEME_COLOR',
                                                  value: 'white',
                                                },
                                                fontFamily: 'Roboto',
                                                fontSize: '0.875rem',
                                                fontStyle: 'none',
                                                fontWeight: '400',
                                                padding: [
                                                  '0.6875rem',
                                                  '1.375rem',
                                                ],
                                                textDecoration: 'none',
                                                textTransform: 'none',
                                              },
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
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
            DrawerContainer(
              {
                options: {
                  ...drawerContainerOptions,
                  innerSpacing: sizes('Inner space', {
                    value: ['0rem', '0rem', '0rem', '0rem'],
                  }),
                },
              },
              [
                Row(
                  {
                    options: {
                      ...rowOptions,
                      maxRowWidth: option('CUSTOM', {
                        label: 'Width',
                        value: 'Full',
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
                      }),
                      rowHeight: text('Height', {
                        value: '100vh',
                        configuration: {
                          as: 'UNIT',
                        },
                      }),
                    },
                  },
                  [
                    Column(
                      {
                        options: {
                          ...columnOptions,
                          columnHeight: text('Height', {
                            value: '100%',
                            configuration: {
                              as: 'UNIT',
                            },
                          }),
                          innerSpacing: sizes('Inner space', {
                            value: ['0rem', '0rem', '0rem', '0rem'],
                          }),
                        },
                      },
                      [
                        Grid(
                          {
                            options: {
                              ...gridOptions,
                              height: size('Height', {
                                value: '100%',
                                configuration: {
                                  as: 'UNIT',
                                },
                              }),
                            },
                          },
                          [
                            Grid(
                              {
                                options: {
                                  ...gridOptions,
                                  direction: option('CUSTOM', {
                                    value: 'column',
                                    label: 'Direction',
                                    configuration: {
                                      as: 'BUTTONGROUP',
                                      dataType: 'string',
                                      allowedInput: [
                                        { name: 'Horizontal', value: 'row' },
                                        { name: 'Vertical', value: 'column' },
                                      ],
                                      condition: showIf(
                                        'type',
                                        'EQ',
                                        'container',
                                      ),
                                    },
                                  }),
                                },
                              },
                              [
                                Box(
                                  {
                                    options: {
                                      ...boxOptions,
                                      stretch: toggle(
                                        'Stretch (when in flex container)',
                                        {
                                          value: true,
                                        },
                                      ),
                                      innerSpacing: sizes('Inner space', {
                                        value: ['0rem', '0rem', '0rem', '0rem'],
                                      }),
                                      backgroundColor: color(
                                        'Background color',
                                        {
                                          value: ThemeColor.LIGHT,
                                        },
                                      ),
                                      backgroundColorAlpha: option('NUMBER', {
                                        label: 'Background color opacity',
                                        value: 20,
                                      }),
                                    },
                                  },
                                  [
                                    Row(
                                      {
                                        options: {
                                          ...rowOptions,
                                          maxRowWidth: option('CUSTOM', {
                                            label: 'Width',
                                            value: 'Full',
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
                                          }),
                                          rowHeight: text('Height', {
                                            value: '100%',
                                            configuration: {
                                              as: 'UNIT',
                                            },
                                          }),
                                        },
                                      },
                                      [
                                        Column(
                                          {
                                            options: {
                                              ...columnOptions,
                                              columnWidth: option('CUSTOM', {
                                                label: 'Column width',
                                                value: '12',
                                                configuration: {
                                                  as: 'DROPDOWN',
                                                  dataType: 'string',
                                                  allowedInput: [
                                                    {
                                                      name: 'Fit content',
                                                      value: 'fitContent',
                                                    },
                                                    {
                                                      name: 'Flexible',
                                                      value: 'flexible',
                                                    },
                                                    {
                                                      name: 'Hidden',
                                                      value: 'hidden',
                                                    },
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
                                              }),
                                              columnWidthTabletLandscape:
                                                option('CUSTOM', {
                                                  label:
                                                    'Column width (tablet landscape)',
                                                  value: '12',
                                                  configuration: {
                                                    as: 'DROPDOWN',
                                                    dataType: 'string',
                                                    allowedInput: [
                                                      {
                                                        name: 'Fit content',
                                                        value: 'fitContent',
                                                      },
                                                      {
                                                        name: 'Flexible',
                                                        value: 'flexible',
                                                      },
                                                      {
                                                        name: 'Hidden',
                                                        value: 'hidden',
                                                      },
                                                      { name: '1', value: '1' },
                                                      { name: '2', value: '2' },
                                                      { name: '3', value: '3' },
                                                      { name: '4', value: '4' },
                                                      { name: '5', value: '5' },
                                                      { name: '6', value: '6' },
                                                      { name: '7', value: '7' },
                                                      { name: '8', value: '8' },
                                                      { name: '9', value: '9' },
                                                      {
                                                        name: '10',
                                                        value: '10',
                                                      },
                                                      {
                                                        name: '11',
                                                        value: '11',
                                                      },
                                                      {
                                                        name: '12',
                                                        value: '12',
                                                      },
                                                    ],
                                                  },
                                                }),
                                              columnWidthTabletPortrait: option(
                                                'CUSTOM',
                                                {
                                                  value: '12',
                                                  label:
                                                    'Column width (tablet portrait)',
                                                  configuration: {
                                                    as: 'DROPDOWN',
                                                    dataType: 'string',
                                                    allowedInput: [
                                                      {
                                                        name: 'Fit content',
                                                        value: 'fitContent',
                                                      },
                                                      {
                                                        name: 'Flexible',
                                                        value: 'flexible',
                                                      },
                                                      {
                                                        name: 'Hidden',
                                                        value: 'hidden',
                                                      },
                                                      { name: '1', value: '1' },
                                                      { name: '2', value: '2' },
                                                      { name: '3', value: '3' },
                                                      { name: '4', value: '4' },
                                                      { name: '5', value: '5' },
                                                      { name: '6', value: '6' },
                                                      { name: '7', value: '7' },
                                                      { name: '8', value: '8' },
                                                      { name: '9', value: '9' },
                                                      {
                                                        name: '10',
                                                        value: '10',
                                                      },
                                                      {
                                                        name: '11',
                                                        value: '11',
                                                      },
                                                      {
                                                        name: '12',
                                                        value: '12',
                                                      },
                                                    ],
                                                  },
                                                },
                                              ),
                                              columnWidthMobile: option(
                                                'CUSTOM',
                                                {
                                                  value: '12',
                                                  label:
                                                    'Column width (mobile)',
                                                  configuration: {
                                                    as: 'DROPDOWN',
                                                    dataType: 'string',
                                                    allowedInput: [
                                                      {
                                                        name: 'Fit content',
                                                        value: 'fitContent',
                                                      },
                                                      {
                                                        name: 'Flexible',
                                                        value: 'flexible',
                                                      },
                                                      {
                                                        name: 'Hidden',
                                                        value: 'hidden',
                                                      },
                                                      { name: '1', value: '1' },
                                                      { name: '2', value: '2' },
                                                      { name: '3', value: '3' },
                                                      { name: '4', value: '4' },
                                                      { name: '5', value: '5' },
                                                      { name: '6', value: '6' },
                                                      { name: '7', value: '7' },
                                                      { name: '8', value: '8' },
                                                      { name: '9', value: '9' },
                                                      {
                                                        name: '10',
                                                        value: '10',
                                                      },
                                                      {
                                                        name: '11',
                                                        value: '11',
                                                      },
                                                      {
                                                        name: '12',
                                                        value: '12',
                                                      },
                                                    ],
                                                  },
                                                },
                                              ),
                                              columnHeight: text('Height', {
                                                value: '100%',
                                                configuration: {
                                                  as: 'UNIT',
                                                },
                                              }),
                                              outerSpacing: sizes(
                                                'Outer space',
                                                {
                                                  value: ['L', 'L', 'L', 'L'],
                                                },
                                              ),
                                              innerSpacing: sizes(
                                                'Inner space',
                                                {
                                                  value: ['L', 'L', 'L', 'L'],
                                                },
                                              ),
                                            },
                                          },
                                          [
                                            Box(
                                              {
                                                options: {
                                                  ...boxOptions,
                                                  innerSpacing: sizes(
                                                    'Inner space',
                                                    {
                                                      value: [
                                                        '0rem',
                                                        '0rem',
                                                        '0rem',
                                                        '0rem',
                                                      ],
                                                    },
                                                  ),
                                                },
                                              },
                                              [
                                                Row(
                                                  {
                                                    options: {
                                                      ...rowOptions,
                                                      maxRowWidth: option(
                                                        'CUSTOM',
                                                        {
                                                          label: 'Width',
                                                          value: 'Full',
                                                          configuration: {
                                                            as: 'BUTTONGROUP',
                                                            dataType: 'string',
                                                            allowedInput: [
                                                              {
                                                                name: 'S',
                                                                value: 'S',
                                                              },
                                                              {
                                                                name: 'M',
                                                                value: 'M',
                                                              },
                                                              {
                                                                name: 'L',
                                                                value: 'L',
                                                              },
                                                              {
                                                                name: 'XL',
                                                                value: 'XL',
                                                              },
                                                              {
                                                                name: 'Full',
                                                                value: 'Full',
                                                              },
                                                            ],
                                                          },
                                                        },
                                                      ),
                                                    },
                                                  },
                                                  [
                                                    Column(
                                                      {
                                                        options: {
                                                          ...columnOptions,
                                                          innerSpacing: sizes(
                                                            'Inner space',
                                                            {
                                                              value: [
                                                                '0rem',
                                                                '0rem',
                                                                '0rem',
                                                                '0rem',
                                                              ],
                                                            },
                                                          ),
                                                        },
                                                      },
                                                      [
                                                        Conditional(
                                                          {
                                                            options: {
                                                              ...conditionalOptions,
                                                              visible: toggle(
                                                                'Initial visibility',
                                                                {
                                                                  value: false,
                                                                  configuration:
                                                                    {
                                                                      as: 'VISIBILITY',
                                                                    },
                                                                },
                                                              ),
                                                            },
                                                          },
                                                          [
                                                            Box(
                                                              {
                                                                options: {
                                                                  ...boxOptions,
                                                                  outerSpacing:
                                                                    sizes(
                                                                      'Outer space',
                                                                      {
                                                                        value: [
                                                                          '0rem',
                                                                          '0rem',
                                                                          'XL',
                                                                          '0rem',
                                                                        ],
                                                                      },
                                                                    ),
                                                                  backgroundColor:
                                                                    color(
                                                                      'Background color',
                                                                      {
                                                                        value:
                                                                          ThemeColor.DANGER,
                                                                      },
                                                                    ),
                                                                  borderRadius:
                                                                    size(
                                                                      'Border radius',
                                                                      {
                                                                        value:
                                                                          '5px',
                                                                      },
                                                                    ),
                                                                },
                                                              },
                                                              [
                                                                Text(
                                                                  {
                                                                    options: {
                                                                      ...textOptions,
                                                                      content:
                                                                        variable(
                                                                          'Content',
                                                                          {
                                                                            value:
                                                                              [
                                                                                'Attention: This template is using next generation actions!',
                                                                              ],
                                                                            configuration:
                                                                              {
                                                                                as: 'MULTILINE',
                                                                              },
                                                                          },
                                                                        ),
                                                                      type: font(
                                                                        'Font',
                                                                        {
                                                                          value:
                                                                            [
                                                                              'Body1',
                                                                            ],
                                                                        },
                                                                      ),
                                                                      outerSpacing:
                                                                        sizes(
                                                                          'Outer space',
                                                                          {
                                                                            value:
                                                                              [
                                                                                '0rem',
                                                                                '0rem',
                                                                                '0rem',
                                                                                'S',
                                                                              ],
                                                                          },
                                                                        ),
                                                                      textColor:
                                                                        color(
                                                                          'Text color',
                                                                          {
                                                                            value:
                                                                              ThemeColor.WHITE,
                                                                          },
                                                                        ),
                                                                      fontWeight:
                                                                        option(
                                                                          'CUSTOM',
                                                                          {
                                                                            label:
                                                                              'Font weight',
                                                                            value:
                                                                              '500',
                                                                            configuration:
                                                                              {
                                                                                as: 'DROPDOWN',
                                                                                dataType:
                                                                                  'string',
                                                                                allowedInput:
                                                                                  [
                                                                                    {
                                                                                      name: '100',
                                                                                      value:
                                                                                        '100',
                                                                                    },
                                                                                    {
                                                                                      name: '200',
                                                                                      value:
                                                                                        '200',
                                                                                    },
                                                                                    {
                                                                                      name: '300',
                                                                                      value:
                                                                                        '300',
                                                                                    },
                                                                                    {
                                                                                      name: '400',
                                                                                      value:
                                                                                        '400',
                                                                                    },
                                                                                    {
                                                                                      name: '500',
                                                                                      value:
                                                                                        '500',
                                                                                    },
                                                                                    {
                                                                                      name: '600',
                                                                                      value:
                                                                                        '600',
                                                                                    },
                                                                                    {
                                                                                      name: '700',
                                                                                      value:
                                                                                        '700',
                                                                                    },
                                                                                    {
                                                                                      name: '800',
                                                                                      value:
                                                                                        '800',
                                                                                    },
                                                                                    {
                                                                                      name: '900',
                                                                                      value:
                                                                                        '900',
                                                                                    },
                                                                                  ],
                                                                              },
                                                                          },
                                                                        ),
                                                                    },
                                                                  },
                                                                  [],
                                                                ),
                                                                Text(
                                                                  {
                                                                    options: {
                                                                      ...textOptions,
                                                                      content:
                                                                        variable(
                                                                          'Content',
                                                                          {
                                                                            value:
                                                                              [
                                                                                'You need to configure the permissions of the "create", "update" and "delete" actions in order to use this template.',
                                                                              ],
                                                                            configuration:
                                                                              {
                                                                                as: 'MULTILINE',
                                                                              },
                                                                          },
                                                                        ),
                                                                      type: font(
                                                                        'Font',
                                                                        {
                                                                          value:
                                                                            [
                                                                              'Body1',
                                                                            ],
                                                                        },
                                                                      ),
                                                                      outerSpacing:
                                                                        sizes(
                                                                          'Outer space',
                                                                          {
                                                                            value:
                                                                              [
                                                                                '0rem',
                                                                                '0rem',
                                                                                '0rem',
                                                                                'S',
                                                                              ],
                                                                          },
                                                                        ),
                                                                      textColor:
                                                                        color(
                                                                          'Text color',
                                                                          {
                                                                            value:
                                                                              ThemeColor.WHITE,
                                                                          },
                                                                        ),
                                                                      fontWeight:
                                                                        option(
                                                                          'CUSTOM',
                                                                          {
                                                                            label:
                                                                              'Font weight',
                                                                            value:
                                                                              '500',
                                                                            configuration:
                                                                              {
                                                                                as: 'DROPDOWN',
                                                                                dataType:
                                                                                  'string',
                                                                                allowedInput:
                                                                                  [
                                                                                    {
                                                                                      name: '100',
                                                                                      value:
                                                                                        '100',
                                                                                    },
                                                                                    {
                                                                                      name: '200',
                                                                                      value:
                                                                                        '200',
                                                                                    },
                                                                                    {
                                                                                      name: '300',
                                                                                      value:
                                                                                        '300',
                                                                                    },
                                                                                    {
                                                                                      name: '400',
                                                                                      value:
                                                                                        '400',
                                                                                    },
                                                                                    {
                                                                                      name: '500',
                                                                                      value:
                                                                                        '500',
                                                                                    },
                                                                                    {
                                                                                      name: '600',
                                                                                      value:
                                                                                        '600',
                                                                                    },
                                                                                    {
                                                                                      name: '700',
                                                                                      value:
                                                                                        '700',
                                                                                    },
                                                                                    {
                                                                                      name: '800',
                                                                                      value:
                                                                                        '800',
                                                                                    },
                                                                                    {
                                                                                      name: '900',
                                                                                      value:
                                                                                        '900',
                                                                                    },
                                                                                  ],
                                                                              },
                                                                          },
                                                                        ),
                                                                    },
                                                                  },
                                                                  [],
                                                                ),
                                                                Text(
                                                                  {
                                                                    options: {
                                                                      ...textOptions,
                                                                      content:
                                                                        variable(
                                                                          'Content',
                                                                          {
                                                                            value:
                                                                              [
                                                                                'This message is not visible in your app',
                                                                              ],
                                                                            configuration:
                                                                              {
                                                                                as: 'MULTILINE',
                                                                              },
                                                                          },
                                                                        ),
                                                                      type: font(
                                                                        'Font',
                                                                        {
                                                                          value:
                                                                            [
                                                                              'Body1',
                                                                            ],
                                                                        },
                                                                      ),
                                                                      outerSpacing:
                                                                        sizes(
                                                                          'Outer space',
                                                                          {
                                                                            value:
                                                                              [
                                                                                '0rem',
                                                                                '0rem',
                                                                                '0rem',
                                                                                'S',
                                                                              ],
                                                                          },
                                                                        ),
                                                                      textColor:
                                                                        color(
                                                                          'Text color',
                                                                          {
                                                                            value:
                                                                              ThemeColor.WHITE,
                                                                          },
                                                                        ),
                                                                      fontWeight:
                                                                        option(
                                                                          'CUSTOM',
                                                                          {
                                                                            label:
                                                                              'Font weight',
                                                                            value:
                                                                              '500',
                                                                            configuration:
                                                                              {
                                                                                as: 'DROPDOWN',
                                                                                dataType:
                                                                                  'string',
                                                                                allowedInput:
                                                                                  [
                                                                                    {
                                                                                      name: '100',
                                                                                      value:
                                                                                        '100',
                                                                                    },
                                                                                    {
                                                                                      name: '200',
                                                                                      value:
                                                                                        '200',
                                                                                    },
                                                                                    {
                                                                                      name: '300',
                                                                                      value:
                                                                                        '300',
                                                                                    },
                                                                                    {
                                                                                      name: '400',
                                                                                      value:
                                                                                        '400',
                                                                                    },
                                                                                    {
                                                                                      name: '500',
                                                                                      value:
                                                                                        '500',
                                                                                    },
                                                                                    {
                                                                                      name: '600',
                                                                                      value:
                                                                                        '600',
                                                                                    },
                                                                                    {
                                                                                      name: '700',
                                                                                      value:
                                                                                        '700',
                                                                                    },
                                                                                    {
                                                                                      name: '800',
                                                                                      value:
                                                                                        '800',
                                                                                    },
                                                                                    {
                                                                                      name: '900',
                                                                                      value:
                                                                                        '900',
                                                                                    },
                                                                                  ],
                                                                              },
                                                                          },
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
                                                    Column(
                                                      {
                                                        options: {
                                                          ...columnOptions,
                                                          innerSpacing: sizes(
                                                            'Inner space',
                                                            {
                                                              value: [
                                                                '0rem',
                                                                '0rem',
                                                                '0rem',
                                                                '0rem',
                                                              ],
                                                            },
                                                          ),
                                                        },
                                                      },
                                                      [
                                                        Box(
                                                          {
                                                            options: {
                                                              ...boxOptions,
                                                              alignment:
                                                                buttongroup(
                                                                  'Alignment',
                                                                  [
                                                                    [
                                                                      'None',
                                                                      'none',
                                                                    ],
                                                                    [
                                                                      'Left',
                                                                      'flex-start',
                                                                    ],
                                                                    [
                                                                      'Center',
                                                                      'center',
                                                                    ],
                                                                    [
                                                                      'Right',
                                                                      'flex-end',
                                                                    ],
                                                                    [
                                                                      'Justified',
                                                                      'space-between',
                                                                    ],
                                                                  ],
                                                                  {
                                                                    value:
                                                                      'space-between',
                                                                    configuration:
                                                                      {
                                                                        dataType:
                                                                          'string',
                                                                      },
                                                                  },
                                                                ),
                                                              innerSpacing:
                                                                sizes(
                                                                  'Outer space',
                                                                  {
                                                                    value: [
                                                                      '0rem',
                                                                      '0rem',
                                                                      'XL',
                                                                      '0rem',
                                                                    ],
                                                                  },
                                                                ),
                                                            },
                                                          },
                                                          [
                                                            Text(
                                                              {
                                                                options: {
                                                                  ...textOptions,
                                                                  type: font(
                                                                    'Font',
                                                                    {
                                                                      value: [
                                                                        'Title4',
                                                                      ],
                                                                    },
                                                                  ),
                                                                  content:
                                                                    variable(
                                                                      'Content',
                                                                      {
                                                                        value:
                                                                          [],
                                                                        configuration:
                                                                          {
                                                                            as: 'MULTILINE',
                                                                          },
                                                                        ref: {
                                                                          id: '#pageTitleContent',
                                                                        },
                                                                      },
                                                                    ),
                                                                },
                                                                ref: {
                                                                  id: '#pageTitle',
                                                                },
                                                              },
                                                              [],
                                                            ),
                                                            Button(
                                                              {
                                                                options: {
                                                                  ...buttonOptions,
                                                                  buttonText:
                                                                    variable(
                                                                      'Button text',
                                                                      {
                                                                        value: [
                                                                          'New',
                                                                        ],
                                                                      },
                                                                    ),
                                                                  icon: icon(
                                                                    'Icon',
                                                                    {
                                                                      value:
                                                                        'Add',
                                                                    },
                                                                  ),
                                                                },
                                                                ref: {
                                                                  id: '#createButton',
                                                                },
                                                                style: {
                                                                  overwrite: {
                                                                    backgroundColor:
                                                                      {
                                                                        type: 'THEME_COLOR',
                                                                        value:
                                                                          'primary',
                                                                      },
                                                                    boxShadow:
                                                                      'none',
                                                                    color: {
                                                                      type: 'THEME_COLOR',
                                                                      value:
                                                                        'white',
                                                                    },
                                                                    fontFamily:
                                                                      'Roboto',
                                                                    fontSize:
                                                                      '0.875rem',
                                                                    fontStyle:
                                                                      'none',
                                                                    fontWeight:
                                                                      '400',
                                                                    padding: [
                                                                      '0.6875rem',
                                                                      '1.375rem',
                                                                    ],
                                                                    textDecoration:
                                                                      'none',
                                                                    textTransform:
                                                                      'none',
                                                                  },
                                                                },
                                                              },
                                                              [],
                                                            ),
                                                          ],
                                                        ),
                                                        Dialog(
                                                          {
                                                            options: {
                                                              ...dialogOptions,
                                                            },
                                                            ref: {
                                                              id: '#deleteDialog',
                                                            },
                                                          },
                                                          [
                                                            Paper({}, [
                                                              Row({}, [
                                                                Column({}, [
                                                                  Box(
                                                                    {
                                                                      options: {
                                                                        ...boxOptions,
                                                                        alignment:
                                                                          buttongroup(
                                                                            'Alignment',
                                                                            [
                                                                              [
                                                                                'None',
                                                                                'none',
                                                                              ],
                                                                              [
                                                                                'Left',
                                                                                'flex-start',
                                                                              ],
                                                                              [
                                                                                'Center',
                                                                                'center',
                                                                              ],
                                                                              [
                                                                                'Right',
                                                                                'flex-end',
                                                                              ],
                                                                              [
                                                                                'Justified',
                                                                                'space-between',
                                                                              ],
                                                                            ],
                                                                            {
                                                                              value:
                                                                                'space-between',
                                                                              configuration:
                                                                                {
                                                                                  dataType:
                                                                                    'string',
                                                                                },
                                                                            },
                                                                          ),
                                                                      },
                                                                    },
                                                                    [
                                                                      Text(
                                                                        {
                                                                          options:
                                                                            {
                                                                              ...textOptions,
                                                                              content:
                                                                                variable(
                                                                                  'Content',
                                                                                  {
                                                                                    value:
                                                                                      [
                                                                                        'Delete record',
                                                                                      ],
                                                                                    configuration:
                                                                                      {
                                                                                        as: 'MULTILINE',
                                                                                      },
                                                                                  },
                                                                                ),
                                                                              type: font(
                                                                                'Font',
                                                                                {
                                                                                  value:
                                                                                    [
                                                                                      'Title4',
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            },
                                                                        },
                                                                        [],
                                                                      ),
                                                                      Button({
                                                                        style: {
                                                                          overwrite:
                                                                            {
                                                                              backgroundColor:
                                                                                {
                                                                                  type: 'STATIC',
                                                                                  value:
                                                                                    'transparent',
                                                                                },
                                                                              boxShadow:
                                                                                'none',
                                                                              color:
                                                                                {
                                                                                  type: 'THEME_COLOR',
                                                                                  value:
                                                                                    'light',
                                                                                },
                                                                              padding:
                                                                                [
                                                                                  '0rem',
                                                                                  '0.6875rem',
                                                                                  '0.6875rem',
                                                                                  '0.6875rem',
                                                                                ],
                                                                            },
                                                                        },
                                                                        options:
                                                                          {
                                                                            ...buttonOptions,
                                                                            icon: icon(
                                                                              'Icon',
                                                                              {
                                                                                value:
                                                                                  'Close',
                                                                              },
                                                                            ),
                                                                            buttonText:
                                                                              variable(
                                                                                'Button text',
                                                                                {
                                                                                  value:
                                                                                    [
                                                                                      '',
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            outerSpacing:
                                                                              sizes(
                                                                                'Outer space',
                                                                                {
                                                                                  value:
                                                                                    [
                                                                                      '0rem',
                                                                                      'S',
                                                                                      '0rem',
                                                                                      '0rem',
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            size: option(
                                                                              'CUSTOM',
                                                                              {
                                                                                value:
                                                                                  'medium',
                                                                                label:
                                                                                  'Icon size',
                                                                                configuration:
                                                                                  {
                                                                                    as: 'BUTTONGROUP',
                                                                                    dataType:
                                                                                      'string',
                                                                                    allowedInput:
                                                                                      [
                                                                                        {
                                                                                          name: 'Small',
                                                                                          value:
                                                                                            'small',
                                                                                        },
                                                                                        {
                                                                                          name: 'Medium',
                                                                                          value:
                                                                                            'medium',
                                                                                        },
                                                                                        {
                                                                                          name: 'Large',
                                                                                          value:
                                                                                            'large',
                                                                                        },
                                                                                      ],
                                                                                    condition:
                                                                                      hideIf(
                                                                                        'icon',
                                                                                        'EQ',
                                                                                        'none',
                                                                                      ),
                                                                                  },
                                                                              },
                                                                            ),
                                                                          },
                                                                        ref: {
                                                                          id: '#closeBtn',
                                                                        },
                                                                      }),
                                                                    ],
                                                                  ),
                                                                  Row({}, [
                                                                    Column({}, [
                                                                      Text(
                                                                        {
                                                                          options:
                                                                            {
                                                                              ...textOptions,
                                                                              content:
                                                                                variable(
                                                                                  'Content',
                                                                                  {
                                                                                    value:
                                                                                      [
                                                                                        "Are you sure you want to delete this record? You can't undo this action.",
                                                                                      ],
                                                                                    configuration:
                                                                                      {
                                                                                        as: 'MULTILINE',
                                                                                      },
                                                                                  },
                                                                                ),
                                                                              type: font(
                                                                                'Font',
                                                                                {
                                                                                  value:
                                                                                    [
                                                                                      'Body1',
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            },
                                                                        },
                                                                        [],
                                                                      ),
                                                                    ]),
                                                                  ]),
                                                                  Box(
                                                                    {
                                                                      options: {
                                                                        ...boxOptions,
                                                                        alignment:
                                                                          buttongroup(
                                                                            'Alignment',
                                                                            [
                                                                              [
                                                                                'None',
                                                                                'none',
                                                                              ],
                                                                              [
                                                                                'Left',
                                                                                'flex-start',
                                                                              ],
                                                                              [
                                                                                'Center',
                                                                                'center',
                                                                              ],
                                                                              [
                                                                                'Right',
                                                                                'flex-end',
                                                                              ],
                                                                              [
                                                                                'Justified',
                                                                                'space-between',
                                                                              ],
                                                                            ],
                                                                            {
                                                                              value:
                                                                                'flex-end',
                                                                              configuration:
                                                                                {
                                                                                  dataType:
                                                                                    'string',
                                                                                },
                                                                            },
                                                                          ),
                                                                      },
                                                                    },
                                                                    [
                                                                      Button(
                                                                        {
                                                                          ref: {
                                                                            id: '#cancelButton',
                                                                          },
                                                                          options:
                                                                            {
                                                                              ...buttonOptions,
                                                                              buttonText:
                                                                                variable(
                                                                                  'Button text',
                                                                                  {
                                                                                    value:
                                                                                      [
                                                                                        'Cancel',
                                                                                      ],
                                                                                  },
                                                                                ),
                                                                              outerSpacing:
                                                                                sizes(
                                                                                  'Outer space',
                                                                                  {
                                                                                    value:
                                                                                      [
                                                                                        '0rem',
                                                                                        'M',
                                                                                        '0rem',
                                                                                        '0rem',
                                                                                      ],
                                                                                  },
                                                                                ),
                                                                            },
                                                                          style:
                                                                            {
                                                                              overwrite:
                                                                                {
                                                                                  backgroundColor:
                                                                                    {
                                                                                      type: 'STATIC',
                                                                                      value:
                                                                                        'transparent',
                                                                                    },
                                                                                  borderColor:
                                                                                    {
                                                                                      type: 'THEME_COLOR',
                                                                                      value:
                                                                                        'primary',
                                                                                    },
                                                                                  borderRadius:
                                                                                    [
                                                                                      '0.25rem',
                                                                                    ],
                                                                                  borderStyle:
                                                                                    'solid',
                                                                                  borderWidth:
                                                                                    [
                                                                                      '0.0625rem',
                                                                                    ],
                                                                                  boxShadow:
                                                                                    'none',
                                                                                  color:
                                                                                    {
                                                                                      type: 'THEME_COLOR',
                                                                                      value:
                                                                                        'primary',
                                                                                    },
                                                                                  fontFamily:
                                                                                    'Roboto',
                                                                                  fontSize:
                                                                                    '0.875rem',
                                                                                  fontStyle:
                                                                                    'none',
                                                                                  fontWeight:
                                                                                    '400',
                                                                                  padding:
                                                                                    [
                                                                                      '0.625rem',
                                                                                      '1.3125rem',
                                                                                    ],
                                                                                  textDecoration:
                                                                                    'none',
                                                                                  textTransform:
                                                                                    'none',
                                                                                },
                                                                            },
                                                                        },
                                                                        [],
                                                                      ),
                                                                      component(
                                                                        'Form Beta',
                                                                        {
                                                                          label:
                                                                            'Delete Form Beta',
                                                                          options:
                                                                            defaults,
                                                                          ref: {
                                                                            id: '#deleteForm',
                                                                          },
                                                                        },
                                                                        [],
                                                                      ),
                                                                    ],
                                                                  ),
                                                                ]),
                                                              ]),
                                                            ]),
                                                          ],
                                                        ),
                                                        DataTable(
                                                          {
                                                            ref: {
                                                              id: '#dataTable',
                                                            },
                                                            options: {
                                                              ...dataTableOptions,
                                                              pagination:
                                                                option(
                                                                  'CUSTOM',
                                                                  {
                                                                    label:
                                                                      'Pagination',
                                                                    value:
                                                                      'whenNeeded',
                                                                    configuration:
                                                                      {
                                                                        as: 'BUTTONGROUP',
                                                                        dataType:
                                                                          'string',
                                                                        dependsOn:
                                                                          'model',
                                                                        allowedInput:
                                                                          [
                                                                            {
                                                                              name: 'Always',
                                                                              value:
                                                                                'always',
                                                                            },
                                                                            {
                                                                              name: 'When needed',
                                                                              value:
                                                                                'whenNeeded',
                                                                            },
                                                                            {
                                                                              name: 'Never',
                                                                              value:
                                                                                'never',
                                                                            },
                                                                          ],
                                                                      },
                                                                  },
                                                                ),
                                                              take: option(
                                                                'CUSTOM',
                                                                {
                                                                  value: '10',
                                                                  label:
                                                                    'Rows per page',
                                                                  configuration:
                                                                    {
                                                                      as: 'DROPDOWN',
                                                                      dataType:
                                                                        'string',
                                                                      dependsOn:
                                                                        'model',
                                                                      allowedInput:
                                                                        [
                                                                          {
                                                                            name: '5',
                                                                            value:
                                                                              '5',
                                                                          },
                                                                          {
                                                                            name: '10',
                                                                            value:
                                                                              '10',
                                                                          },
                                                                          {
                                                                            name: '25',
                                                                            value:
                                                                              '25',
                                                                          },
                                                                          {
                                                                            name: '50',
                                                                            value:
                                                                              '50',
                                                                          },
                                                                          {
                                                                            name: '100',
                                                                            value:
                                                                              '100',
                                                                          },
                                                                        ],
                                                                      condition:
                                                                        hideIf(
                                                                          'autoLoadOnScroll',
                                                                          'EQ',
                                                                          true,
                                                                        ),
                                                                    },
                                                                },
                                                              ),
                                                              background: color(
                                                                'Background',
                                                                {
                                                                  value:
                                                                    ThemeColor.WHITE,
                                                                },
                                                              ),
                                                              variant: option(
                                                                'CUSTOM',
                                                                {
                                                                  label:
                                                                    'Variant',
                                                                  value:
                                                                    'outlined',
                                                                  configuration:
                                                                    {
                                                                      as: 'BUTTONGROUP',
                                                                      dataType:
                                                                        'string',
                                                                      allowedInput:
                                                                        [
                                                                          {
                                                                            name: 'Flat',
                                                                            value:
                                                                              'flat',
                                                                          },
                                                                          {
                                                                            name: 'Elevation',
                                                                            value:
                                                                              'elevation',
                                                                          },
                                                                          {
                                                                            name: 'Outlined',
                                                                            value:
                                                                              'outlined',
                                                                          },
                                                                        ],
                                                                    },
                                                                },
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
                                          ],
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                                Box(
                                  {
                                    options: {
                                      ...boxOptions,
                                      width: size('Width', {
                                        value: '100%',
                                        configuration: {
                                          as: 'UNIT',
                                        },
                                      }),
                                      innerSpacing: sizes('Inner space', {
                                        value: ['0rem', '0rem', '0rem', '0rem'],
                                      }),
                                      backgroundColor: color(
                                        'Background color',
                                        {
                                          value: ThemeColor.LIGHT,
                                        },
                                      ),
                                      backgroundColorAlpha: option('NUMBER', {
                                        label: 'Background color opacity',
                                        value: 20,
                                      }),
                                    },
                                    ref: { id: '#footer' },
                                  },
                                  [],
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  ],
);

const prefabStructure = [
  Drawer(
    {
      label: 'Backoffice',
      options: {
        ...drawerOptions,
        drawerWidth: size('Drawer Width', {
          value: '240px',
          configuration: {
            as: 'UNIT',
          },
        }),
      },
    },
    [
      DrawerBar(
        {
          label: 'Backoffice - Side menu',
          options: {
            ...drawerBarOptions,
            innerSpacing: sizes('Inner space', {
              value: ['0rem', '0rem', '0rem', '0rem'],
            }),
          },
          ref: { id: '#sideMenu' },
        },
        [sideMenu],
      ),
      drawerContainer,
    ],
  ),
];

const beforeCreate = ({
  components: {
    Content,
    Header,
    Field,
    Footer,
    ModelRelationSelector,
    PropertiesSelector,
    PartialSelector,
    Text: TextComp,
    Box: BoxComp,
    Button: Buttoncomp,
  },
  helpers,
  prefab: originalPrefab,
  save,
  close,
}: BeforeCreateArgs) => {
  const {
    useModelQuery,
    prepareAction,
    cloneStructure,
    setOption,
    createUuid,
    makeBettyInput,
    makeBettyUpdateInput,
    PropertyKind,
    BettyPrefabs,
  } = helpers;
  const [modelId, setModelId] = React.useState('');
  const [model, setModel] = React.useState<ModelProps>();
  const [properties, setProperties] = React.useState<Properties[]>([]);
  const [modelValidation, setModelValidation] = React.useState(false);
  const [propertiesValidation, setPropertiesValidation] = React.useState(false);
  const [idProperty, setIdProperty] = React.useState<IdPropertyProps>();
  const { data } = useModelQuery({
    variables: { id: modelId },
    skip: !modelId,
  });
  const [stepNumber, setStepNumber] = React.useState(1);
  const [headerPartialId, setHeaderPartialId] = React.useState('');
  const [footerPartialId, setFooterPartialId] = React.useState('');

  const createFormId = createUuid();
  const editFormId = createUuid();
  const deleteButtonId = createUuid();
  function treeSearch(
    dirName: string,
    array: PrefabReference[],
  ): PrefabComponent | undefined {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      const q = array[i];
      if (q.type === 'COMPONENT') {
        if (q.ref && q.ref.id === dirName) {
          return q;
        }
      }
      if (q.type !== 'PARTIAL' && q.descendants && q.descendants.length) {
        const result = treeSearch(dirName, q.descendants);
        if (result) return result;
      }
    }
    return undefined;
  }

  const enrichVarObj = (obj: any) => {
    const returnObject = obj;
    if (data && data.model) {
      const property = data.model.properties.find(
        (prop: any) => prop.id === obj.id[0],
      );
      if (property) {
        returnObject.name = `{{ ${data.model.name}.${property.name} }}`;
      }
    }
    return returnObject;
  };

  const makeDetail = (prop: any) => {
    const mediaComponent = cloneStructure('Media');
    if (mediaComponent.type === 'COMPONENT') {
      setOption(
        mediaComponent,
        'imageSource',
        (opt: PrefabComponentOption) => ({
          ...opt,
          value: [{ ...prop }],
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Image', value: 'img' },
              { name: 'Video', value: 'video' },
              { name: 'I-frame', value: 'iframe' },
            ],
          },
        }),
      );
    }

    const detailComponent = cloneStructure('Box');
    if (detailComponent.type === 'COMPONENT') {
      setOption(
        detailComponent,
        'outerSpacing',
        (opt: PrefabComponentOption) => ({
          ...opt,
          value: ['0rem', '0rem', 'M', '0rem'],
        }),
      );
      setOption(
        detailComponent,
        'backgroundColor',
        (opt: PrefabComponentOption) => ({
          ...opt,
          value: 'Accent1',
        }),
      );
      setOption(
        detailComponent,
        'backgroundColorAlpha',
        (opt: PrefabComponentOption) => ({
          ...opt,
          value: '20',
        }),
      );

      const labelText = cloneStructure('Text');
      if (labelText.type === 'COMPONENT') {
        setOption(labelText, 'content', (opt: PrefabComponentOption) => ({
          ...opt,
          value: [`${[prop.label]}:`],
          configuration: { as: 'MULTILINE' },
        }));
        setOption(labelText, 'type', (opt: PrefabComponentOption) => ({
          ...opt,
          value: 'Body1',
        }));
        setOption(labelText, 'fontWeight', (opt: PrefabComponentOption) => ({
          ...opt,
          value: '500',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: '100', value: '100' },
              { name: '200', value: '200' },
              { name: '300', value: '300' },
              { name: '400', value: '400' },
              { name: '500', value: '500' },
              { name: '600', value: '600' },
              { name: '700', value: '700' },
              { name: '800', value: '800' },
              { name: '900', value: '900' },
            ],
          },
        }));
      }
      const valueText = cloneStructure('Text');
      if (valueText.type === 'COMPONENT') {
        setOption(valueText, 'content', (opt: PrefabComponentOption) => ({
          ...opt,
          value: [enrichVarObj({ ...prop })],
          configuration: { as: 'MULTILINE' },
        }));
      }
      detailComponent.descendants = [labelText, valueText];
    }
    return prop.kind === 'IMAGE' ? mediaComponent : detailComponent;
  };

  useModelQuery({
    variables: { id: modelId },
    onCompleted: ({ model: dataModel }: ModelQuery) => {
      setModel(dataModel);
      setIdProperty(dataModel.properties.find(({ name }) => name === 'id'));
    },
  });

  const stepper = {
    setStep: (step: number) => {
      if (step === 1) {
        return (
          <>
            <BoxComp pad={{ bottom: '15px' }}>
              <BoxComp pad={{ bottom: '15px' }}>
                <TextComp size="medium" weight="bolder">
                  Select partials
                </TextComp>
              </BoxComp>
              <BoxComp pad={{ bottom: '15px' }}>
                <TextComp color="grey700">
                  By using a partial for the side menu and footer you can easily
                  reuse the same structure without having to go through every
                  page.
                </TextComp>
              </BoxComp>
              <Field label="SIDEMENU PARTIAL">
                <PartialSelector
                  label="Select a partial"
                  onChange={(headerId: string) => {
                    setHeaderPartialId(headerId);
                  }}
                  preSelected="side menu"
                  value={headerPartialId}
                  allowedTypes={[
                    'BODY_COMPONENT',
                    'CONTAINER_COMPONENT',
                    'CONTENT_COMPONENT',
                  ]}
                />
              </Field>
            </BoxComp>
            <BoxComp pad={{ bottom: '15px' }}>
              <Field label="FOOTER PARTIAL">
                <PartialSelector
                  label="Select a partial"
                  onChange={(footerId: string) => {
                    setFooterPartialId(footerId);
                  }}
                  preSelected="footer"
                  value={footerPartialId}
                  allowedTypes={[
                    'BODY_COMPONENT',
                    'CONTAINER_COMPONENT',
                    'CONTENT_COMPONENT',
                  ]}
                />
              </Field>
            </BoxComp>
          </>
        );
      }

      return (
        <>
          <Field
            label="Model"
            error={
              modelValidation && (
                <TextComp color="#e82600">
                  Selecting a model is required
                </TextComp>
              )
            }
          >
            <ModelRelationSelector
              onChange={(value: string) => {
                setModelValidation(false);
                setModelId(value);
              }}
              value={modelId}
            />
          </Field>
          <Field
            label="Properties used in Backoffice"
            error={
              propertiesValidation && (
                <TextComp color="#e82600">
                  Selecting a property is required
                </TextComp>
              )
            }
          >
            <PropertiesSelector
              modelId={modelId}
              value={properties}
              disabledKinds={[
                'BELONGS_TO',
                'HAS_AND_BELONGS_TO_MANY',
                'HAS_MANY',
                'MULTI_FILE',
                'AUTO_INCREMENT',
                'COUNT',
                'MULTI_IMAGE',
                'PDF',
                'RICH_TEXT',
                'SIGNED_PDF',
                'SUM',
                'BOOLEAN_EXPRESSION',
                'DATE_EXPRESSION',
                'DATE_TIME_EXPRESSION',
                'DECIMAL_EXPRESSION',
                'INTEGER_EXPRESSION',
                'MINUTES_EXPRESSION',
                'PRICE_EXPRESSION',
                'STRING_EXPRESSION',
                'TEXT_EXPRESSION',
                'MINUTES',
                'ZIPCODE',
                'IMAGE',
                'FILE',
              ]}
              onChange={(value: Properties[]) => {
                setProperties(value);
                setPropertiesValidation(false);
              }}
            />
          </Field>
        </>
      );
    },
    onSave: async () => {
      const newPrefab = { ...originalPrefab };
      const inputStructure = (
        textValue: string,
        inputPrefab: PrefabReference,
      ): PrefabReference => {
        const boxPrefab = cloneStructure('Box');
        if (boxPrefab.type === 'COMPONENT') {
          setOption(
            boxPrefab,
            'innerSpacing',
            (options: PrefabComponentOption) => ({
              ...options,
              value: ['M', '0rem', '0rem', '0rem'],
            }),
          );

          const textPrefab = cloneStructure('Text');
          if (textPrefab.type === 'COMPONENT') {
            setOption(
              textPrefab,
              'content',
              (options: PrefabComponentOption) => ({
                ...options,
                value: [textValue],
                configuration: { as: 'MULTILINE' },
              }),
            );
            setOption(textPrefab, 'type', (options: PrefabComponentOption) => ({
              ...options,
              value: ['Body1'],
            }));
            setOption(
              textPrefab,
              'outerSpacing',
              (options: PrefabComponentOption) => ({
                ...options,
                value: ['0rem', '0rem', 'S', '0rem'],
              }),
            );
          }

          boxPrefab.descendants.push(textPrefab);
          boxPrefab.descendants.push(inputPrefab);
        }

        return boxPrefab;
      };

      if (!modelId) {
        setModelValidation(true);
        return;
      }
      if (!properties || properties.length < 1) {
        setPropertiesValidation(true);
        return;
      }

      const footerPartial = treeSearch('#footer', newPrefab.structure);
      const sideMenuPartial = treeSearch('#sideMenu', newPrefab.structure);
      if (headerPartialId && sideMenuPartial) {
        sideMenuPartial.descendants = [
          { type: 'PARTIAL', partialId: headerPartialId },
        ];
      }

      if (footerPartialId && footerPartial) {
        footerPartial.descendants = [
          { type: 'PARTIAL', partialId: footerPartialId },
        ];
      }

      // set title prop
      const titleComponent = treeSearch('#pageTitle', newPrefab.structure);
      if (!titleComponent) throw new Error('No title component found');
      setOption(
        titleComponent,
        'textColor',
        (originalOption: PrefabComponentOption) => ({
          ...originalOption,
          value: 'Dark',
        }),
      );
      setOption(
        titleComponent,
        'content',
        (originalOption: PrefabComponentOption) => ({
          ...originalOption,
          value: [`${data?.model.label}s`],
        }),
      );

      // set datatable
      const dataTableComp = treeSearch('#dataTable', newPrefab.structure);
      if (!dataTableComp) throw new Error('No datatable component found');
      setOption(dataTableComp, 'model', (opts: PrefabComponentOption) => ({
        ...opts,
        value: modelId,
      }));

      properties.forEach((property) => {
        let newProperty = property;
        const inheritFormatKinds = [
          'DATE',
          'DATE_EXPRESSION',
          'DATE_TIME',
          'DATE_TIME_EXPRESSION',
          'DECIMAL',
          'DECIMAL_EXPRESSION',
          'INTEGER',
          'INTEGER_EXPRESSION',
          'PRICE',
          'PRICE_EXPRESSION',
          'TIME',
        ];
        if (property.kind && inheritFormatKinds.includes(property.kind)) {
          newProperty = {
            ...property,
            format: 'INHERIT',
          };
        }

        const dataTableColumnStructure = cloneStructure('Datatable Column');
        if (dataTableColumnStructure.type !== 'COMPONENT') {
          throw new Error(
            `expected component prefab, found ${dataTableColumnStructure.type}`,
          );
        }

        setOption(
          dataTableColumnStructure,
          'property',
          (originalOption: PrefabComponentOption) => {
            return {
              ...originalOption,
              value: newProperty.id,
            };
          },
        );
        setOption(
          dataTableColumnStructure,
          'type',
          (originalOption: PrefabComponentOption) => {
            return {
              ...originalOption,
              value: 'Title6',
            };
          },
        );
        dataTableComp.descendants.push(dataTableColumnStructure);
      });

      const detailButton = cloneStructure('Button');
      if (detailButton.type === 'COMPONENT') {
        detailButton.ref = { id: '#detailButton' };
        detailButton.style = {
          overwrite: {
            backgroundColor: {
              type: 'STATIC',
              value: 'transparent',
            },
            boxShadow: 'none',
            color: {
              type: 'THEME_COLOR',
              value: 'accent2',
            },
            fontFamily: 'Roboto',
            fontSize: '0.875rem',
            fontStyle: 'none',
            fontWeight: '400',
            padding: ['0.6875rem', '0.6875rem'],
            textDecoration: 'none',
            textTransform: 'none',
          },
        };
        setOption(
          detailButton,
          'buttonText',
          (opts: PrefabComponentOption) => ({
            ...opts,
            value: [''],
          }),
        );
        setOption(detailButton, 'icon', (opts: PrefabComponentOption) => ({
          ...opts,
          value: 'Info',
        }));
      }
      const editButton = cloneStructure('Button');
      if (editButton.type === 'COMPONENT') {
        editButton.style = {
          overwrite: {
            backgroundColor: {
              type: 'STATIC',
              value: 'transparent',
            },
            boxShadow: 'none',
            color: {
              type: 'THEME_COLOR',
              value: 'primary',
            },
            fontFamily: 'Roboto',
            fontSize: '0.875rem',
            fontStyle: 'none',
            fontWeight: '400',
            padding: ['0.6875rem', '0.6875rem'],
            textDecoration: 'none',
            textTransform: 'none',
          },
        };
        editButton.ref = { id: '#editButton' };
        setOption(editButton, 'buttonText', (opts: PrefabComponentOption) => ({
          ...opts,
          value: [''],
        }));
        setOption(editButton, 'icon', (opts: PrefabComponentOption) => ({
          ...opts,
          value: 'Edit',
        }));
      }

      const deleteButton = cloneStructure('Button');
      if (deleteButton.type === 'COMPONENT') {
        deleteButton.ref = {
          id: '#deleteButton',
        };
        deleteButton.style = {
          overwrite: {
            backgroundColor: {
              type: 'STATIC',
              value: 'transparent',
            },
            boxShadow: 'none',
            color: {
              type: 'STATIC',
              value: 'red',
            },
            fontFamily: 'Roboto',
            fontSize: '0.875rem',
            fontStyle: 'none',
            fontWeight: '400',
            padding: ['0.6875rem', '0.6875rem'],
            textDecoration: 'none',
            textTransform: 'none',
          },
        };

        setOption(
          deleteButton,
          'buttonText',
          (opts: PrefabComponentOption) => ({
            ...opts,
            value: [''],
          }),
        );
        setOption(deleteButton, 'icon', (opts: PrefabComponentOption) => ({
          ...opts,
          value: 'Delete',
        }));
      }

      const boxComp = cloneStructure('Box');
      if (boxComp.type === 'COMPONENT') {
        setOption(boxComp, 'innerSpacing', (opts: PrefabComponentOption) => ({
          ...opts,
          value: ['0rem', '0rem', '0rem', '0rem'],
        }));
        setOption(boxComp, 'alignment', (opts: PrefabComponentOption) => ({
          ...opts,
          value: 'flex-end',
        }));
        boxComp.descendants = [detailButton, editButton, deleteButton];
      }

      const buttonColumn = cloneStructure('Datatable Column');
      if (buttonColumn.type === 'COMPONENT') {
        buttonColumn.descendants = [boxComp];
      }
      dataTableComp.descendants.push(buttonColumn);

      // set create form
      const filteredproperties = properties.filter(
        (prop: Properties) =>
          prop.label !== 'Created at' &&
          prop.label !== 'Updated at' &&
          prop.label !== 'Id',
      );

      if (idProperty && model) {
        const createForm = treeSearch('#createForm', newPrefab.structure);
        if (!createForm) throw new Error('No create form found');
        createForm.id = createFormId;

        const result = await prepareAction(
          createFormId,
          idProperty,
          filteredproperties,
          'create',
        );

        Object.values(result.variables).forEach(
          ([prop, inputVariable]): void => {
            const generateInputPrefabs = () => {
              switch (prop.kind) {
                case PropertyKind.INTEGER:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.INTEGER,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.EMAIL_ADDRESS:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.EMAIL_ADDRESS,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.DECIMAL:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.DECIMAL,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.TEXT:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.TEXT,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.PRICE:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.PRICE,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.PASSWORD:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.PASSWORD,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.DATE:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.DATE,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.DATE_TIME:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.DATE_TIME,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.TIME:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.TIME,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.FILE:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.FILE,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                // case PropertyKind.IMAGE:
                //   return inputStructure(
                //     prop.label,
                //     makeBettyInput(
                //       BettyPrefabs.IMAGE,
                //       model,
                //       prop,
                //       inputVariable,
                //     ),
                //   );
                case PropertyKind.BOOLEAN:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.BOOLEAN,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                case PropertyKind.LIST:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.LIST,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
                default:
                  return inputStructure(
                    prop.label,
                    makeBettyInput(
                      BettyPrefabs.STRING,
                      model,
                      prop,
                      inputVariable,
                    ),
                  );
              }
            };
            const createFormInputPrefabs = generateInputPrefabs();
            if (
              createFormInputPrefabs.type === 'COMPONENT' &&
              createFormInputPrefabs.descendants[1].type === 'COMPONENT'
            ) {
              setOption(
                createFormInputPrefabs.descendants[1],
                'margin',
                (options: PrefabComponentOption) => ({
                  ...options,
                  value: 'none',
                }),
              );
              setOption(
                createFormInputPrefabs.descendants[1],
                'hideLabel',
                (opts: PrefabComponentOption) => ({
                  ...opts,
                  value: true,
                }),
              );
            }
            createForm.descendants.push(createFormInputPrefabs);
            if (!prop.kind) {
              // eslint-disable-next-line no-console
              console.warn('PropertyKind not found');
            }
          },
        );

        setOption(createForm, 'actionId', (opts: PrefabComponentOption) => ({
          ...opts,
          value: result.action.actionId,
          configuration: { disabled: true },
        }));

        setOption(createForm, 'model', (opts: PrefabComponentOption) => ({
          ...opts,
          value: modelId,
          configuration: {
            disabled: true,
          },
        }));
      }

      // set detail tab
      const detailDatacontainer = treeSearch(
        '#detailDatacontainer',
        newPrefab.structure,
      );
      if (!detailDatacontainer)
        throw new Error('No detail data container found');
      setOption(
        detailDatacontainer,
        'model',
        (opts: PrefabComponentOption) => ({
          ...opts,
          value: modelId,
        }),
      );
      properties.map((prop) =>
        detailDatacontainer.descendants.push(makeDetail(prop)),
      );

      // set edit form
      const editForm = treeSearch('#editForm', newPrefab.structure);
      if (!editForm) throw new Error('No edit form found');
      editForm.id = editFormId;
      if (idProperty && model) {
        const result = await prepareAction(
          editFormId,
          idProperty,
          filteredproperties,
          'update',
        );
        setOption(editForm, 'actionId', (opts: PrefabComponentOption) => ({
          ...opts,
          value: result.action.actionId,
          configuration: { disabled: true },
        }));
        setOption(editForm, 'model', (opts: PrefabComponentOption) => ({
          ...opts,
          value: modelId,
          configuration: {
            disabled: true,
          },
        }));

        Object.values(result.variables).forEach(
          ([prop, inputVariable]): void => {
            const generateInputPrefabs = () => {
              switch (prop.kind) {
                case PropertyKind.INTEGER:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.INTEGER,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.EMAIL_ADDRESS:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.EMAIL_ADDRESS,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.DECIMAL:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.DECIMAL,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.TEXT:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.TEXT,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.PRICE:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.PRICE,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.PASSWORD:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.PASSWORD,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.DATE:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.DATE,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.DATE_TIME:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.DATE_TIME,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.TIME:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.TIME,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.FILE:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.FILE,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                // case PropertyKind.IMAGE:
                //   return inputStructure(
                //     prop.label,
                //     makeBettyUpdateInput(
                //       BettyPrefabs.IMAGE,
                //       model,
                //       prop,
                //       inputVariable,
                //       result.relatedIdProperties,
                //     ),
                //   );
                case PropertyKind.BOOLEAN:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.BOOLEAN,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                case PropertyKind.LIST:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.LIST,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
                default:
                  return inputStructure(
                    prop.label,
                    makeBettyUpdateInput(
                      BettyPrefabs.STRING,
                      model,
                      prop,
                      inputVariable,
                      result.relatedIdProperties,
                    ),
                  );
              }
            };
            const editFormInput = generateInputPrefabs();
            if (
              editFormInput.type === 'COMPONENT' &&
              editFormInput.descendants[1].type === 'COMPONENT'
            ) {
              setOption(
                editFormInput.descendants[1],
                'margin',
                (opts: PrefabComponentOption) => ({
                  ...opts,
                  value: 'none',
                }),
              );
              setOption(
                editFormInput.descendants[1],
                'hideLabel',
                (opts: PrefabComponentOption) => ({
                  ...opts,
                  value: true,
                }),
              );
            }
            editForm.descendants.push(editFormInput);
            if (!prop.kind) {
              // eslint-disable-next-line no-console
              console.warn('PropertyKind not found');
            }
          },
        );

        editForm.descendants.push(
          makeBettyUpdateInput(
            BettyPrefabs.HIDDEN,
            model,
            idProperty,
            result.recordInputVariable,
          ),
        );
      }

      // set delete action
      const deleteForm = treeSearch('#deleteForm', newPrefab.structure);
      if (!deleteForm) throw new Error('No delete form found');
      deleteForm.id = deleteButtonId;

      if (idProperty && model) {
        const result = await prepareAction(
          deleteButtonId,
          idProperty,
          undefined,
          'delete',
        );
        setOption(deleteForm, 'actionId', (opts: PrefabComponentOption) => ({
          ...opts,
          value: result.action.actionId,
          configuration: { disabled: true },
        }));

        setOption(deleteForm, 'model', (opts: PrefabComponentOption) => ({
          ...opts,
          value: modelId,
          configuration: {
            disabled: true,
          },
        }));

        const deleteSubmitButton = cloneStructure('Submit Button');
        if (deleteSubmitButton.type === 'COMPONENT') {
          deleteSubmitButton.style = {
            overwrite: {
              backgroundColor: {
                type: 'STATIC',
                value: 'red',
              },
              boxShadow: 'none',
              color: {
                type: 'THEME_COLOR',
                value: 'white',
              },
              fontFamily: 'Roboto',
              fontSize: '0.875rem',
              fontStyle: 'none',
              fontWeight: '400',
              padding: ['0.6875rem', '1.375rem'],
              textDecoration: 'none',
              textTransform: 'none',
            },
          };
          setOption(
            deleteSubmitButton,
            'buttonText',
            (opts: PrefabComponentOption) => ({
              ...opts,
              value: ['Delete'],
            }),
          );
        }
        deleteForm.descendants.push(deleteSubmitButton);

        deleteForm.descendants.push(
          makeBettyUpdateInput(
            BettyPrefabs.HIDDEN,
            model,
            idProperty,
            result.recordInputVariable,
          ),
        );
      }
      if (idProperty && newPrefab.interactions) {
        newPrefab.interactions.push(
          {
            name: 'setCurrentRecord',
            sourceEvent: 'Click',
            targetOptionName: 'currentRecord',
            parameters: [
              {
                id: [idProperty.id],
                parameter: 'argument',
              },
            ],
            ref: {
              sourceComponentId: '#deleteButton',
              targetComponentId: '#deleteForm',
            },
            type: 'Global',
          } as PrefabInteraction,
          {
            name: 'setCurrentRecord',
            sourceEvent: 'Click',
            targetOptionName: 'currentRecord',
            parameters: [
              {
                id: [idProperty.id],
                parameter: 'argument',
              },
            ],
            ref: {
              sourceComponentId: '#detailButton',
              targetComponentId: '#detailDatacontainer',
            },
            type: 'Global',
          } as PrefabInteraction,
          {
            name: 'setCurrentRecord',
            sourceEvent: 'Click',
            targetOptionName: 'currentRecord',
            parameters: [
              {
                id: [idProperty.id],
                parameter: 'argument',
              },
            ],
            ref: {
              sourceComponentId: '#detailButton',
              targetComponentId: '#editForm',
            },
            type: 'Global',
          } as PrefabInteraction,
          {
            name: 'setCurrentRecord',
            sourceEvent: 'Click',
            targetOptionName: 'currentRecord',
            parameters: [
              {
                id: [idProperty.id],
                parameter: 'argument',
              },
            ],
            ref: {
              sourceComponentId: '#editButton',
              targetComponentId: '#editForm',
            },
            type: 'Global',
          } as PrefabInteraction,
        );
      }
      save(newPrefab);
    },
    buttons: () => (
      <BoxComp direction="row" justify="between">
        <BoxComp direction="row" margin="2rem">
          <Buttoncomp
            label="Previous"
            size="large"
            background={{ color: '#f0f1f5' }}
            onClick={() => {
              if (stepNumber === 1) {
                return;
              }
              const newStepnumber = stepNumber - 1;
              setStepNumber(newStepnumber);
            }}
            margin={{ right: '5px' }}
            disabled={stepNumber === 1}
          />
          <Buttoncomp
            label="Next"
            size="large"
            disabled={stepNumber === stepper.stepAmount}
            onClick={() => {
              const newStepnumber = stepNumber + 1;
              setStepNumber(newStepnumber);
            }}
            primary
          />
        </BoxComp>
        <BoxComp>
          <Footer
            onClose={close}
            onSave={stepNumber === stepper.stepAmount && stepper.onSave}
          />
        </BoxComp>
      </BoxComp>
    ),
    progressBar: () => {
      return (
        <BoxComp
          justify="center"
          margin={{ left: '2rem', top: '-1rem', bottom: '-1rem' }}
        >
          <TextComp size="medium" weight="bold">{`Step: ${stepNumber + 1} / ${
            stepper.stepAmount + 1
          }`}</TextComp>
        </BoxComp>
      );
    },
    stepAmount: 2,
  };
  return (
    <>
      <Header onClose={close} title="Configure back office" />
      {stepper.progressBar()}
      <Content>{stepper.setStep(stepNumber)}</Content>
      {stepper.buttons()}
    </>
  );
};

export default prefab('Back office', attributes, beforeCreate, prefabStructure);
