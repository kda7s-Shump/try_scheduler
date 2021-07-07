import 'moment/locale/ja'
import moment from 'moment';
import React  from 'react';
import {teal, indigo} from '@material-ui/core/colors';
import Paper          from '@material-ui/core/Paper';
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,

  DayView,
  WeekView,
  MonthView,

  Appointments,
  Resources,

  AllDayPanel,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
  Toolbar,
  ViewSwitcher,

  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import '../assets/css/App.css';

const formatDayScaleDate = (nextDate, nextOptions) => {
  const momentDate = moment(nextDate);
  const { weekday } = nextOptions;
  return momentDate.format(weekday ? 'ddd' : 'D');
};

const WeekDayScaleCell = (
  { formatDate, ...restProps },
) => (
  <WeekView.DayScaleCell
    {...restProps}
    formatDate={formatDayScaleDate}
  />
);

const owners = [{
  text: 'Andrew Glover',
  id: 1,
  color: indigo,
}, {
  text: 'Arnie Schwartz',
  id: 2,
  color: teal,
}];

const locations = [
  { text: '沖縄', id: 1 },
  { text: '大阪', id: 2 },
];

const checklists = [
  { text: 'ハサミ', id: 1},
  { text: '分度器', id: 2},
]

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: '2017-5-28',
      data: [
        {
          id: 0,
          title: 'Watercolor Landscape',
          members: [1, 2],
          roomId: 1,
          startDate: new Date(2017, 4, 28, 9, 30),
          endDate: new Date(2017, 4, 28, 12, 0),
        },
        {
          id: 1,
          title: 'Oil Painting for Beginners',
          members: [1],
          roomId: 2,
          startDate: new Date(2017, 4, 28, 12, 30),
          endDate: new Date(2017, 4, 28, 14, 30),
        },
        {
          id: 2,
          title: 'Testing',
          members: [1, 2],
          roomId: 1,
          startDate: new Date(2017, 4, 29, 12, 30),
          endDate: new Date(2017, 4, 29, 14, 30),
        }, {
          id: 3,
          title: 'Final exams',
          members: [1, 2],
          roomId: 2,
          startDate: new Date(2017, 4, 29, 9, 30),
          endDate: new Date(2017, 4, 29, 12, 0),
        }
      ],
      locale: 'ja-JP',
      resources: [{
        fieldName: 'members',
        title: 'メンバー',
        instances: owners,
        allowMultiple: true,
      }, {
        fieldName: 'roomId',
        title: '場所',
        instances: locations,
      }, {
        fieldName: 'checkList',
        title: 'チェックリスト',
        instances: checklists,
        allowMultiple: true,
      }],
      url: "http://localhost:5000",
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.handleErrors  = this.handleErrors.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0
                                ? data[data.length - 1].id + 1
                                : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] }
                                  : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  handleErrors = response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } else {
      return response.json();
    }
  };

  render() {
    const { currentDate, data, locale, resources } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          locale={locale}
        >
          <ViewState
            defaultCurrentDate={currentDate}
            defaultCurrentViewName="Month"
          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />

          <DayView
            cellDuration={60}
          />
          <WeekView
            cellDuration={240}
            dayScaleCellComponent={WeekDayScaleCell}
          />
          <MonthView
            intervalCount={2}
          />

          <Appointments />
          <Resources
            data={resources}
            mainResourceName="members"
          />

          <IntegratedEditing />

          <AllDayPanel
            messages={{allDay: '終日'}}
          />
          <AppointmentTooltip
            showCloseButton
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
          <ConfirmationDialog
            ignoreCancel={true}
          />
          <Toolbar />
          <ViewSwitcher />

          <DateNavigator />
          <TodayButton />
        </Scheduler>
      </Paper>
    );
  }
}
