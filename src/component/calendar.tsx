import * as React from 'react';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
};

const controlClass = mergeStyleSets({
  control: {
    margin: '15px 0',
    maxWidth: '300px',
  }
});

type DatePickerProps = {
  placeholder?: string,
  defaultValue?: string
}

export const DatePickerWeekNumbersExample: React.FC<DatePickerProps> = ({placeholder, defaultValue}) => {
  const duedate = defaultValue !== undefined ? defaultValue : ''
  const date = new Date(duedate)
  return (
    <div>
      <DatePicker
        className={controlClass.control}
        firstDayOfWeek={DayOfWeek.Sunday}
        strings={DayPickerStrings}
        firstWeekOfYear={1}
        borderless
        value={date}
        showMonthPickerAsOverlay={true}
        placeholder={placeholder !== '' ? placeholder : `Select a date...`}
        ariaLabel="Select a date"
        onSelectDate={(e)=>console.log(e)}
      />
    </div>
  );
};