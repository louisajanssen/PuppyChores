import * as React from "react";
import { DatePicker, IDatePickerStrings } from '@fluentui/react';

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
    monthPickerHeaderAriaLabel: '{0}, select to change the year',
    yearPickerHeaderAriaLabel: '{0}, select to change the month',
  };
  
  // const controlClass = mergeStyleSets({
  //   control: {
  //     margin: '0 0 15px 0',
  //     maxWidth: '300px',
  //   },
  // });
  
  export const Day: React.FC = () => {
  
  
    return (
      <div>
        <DatePicker
          // className={controlClass.control}
          strings={DayPickerStrings}
          placeholder="Thu Apr 01 2021"
          ariaLabel="Select a date"
        />
      </div>
    );
  };