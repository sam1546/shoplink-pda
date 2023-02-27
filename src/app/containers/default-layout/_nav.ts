import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'All M/C'
    }
  },
  // {
  //   title: true,
  //   name: 'Groupwise M/Cs'
  // },
  // {
  //   name: 'Machines',
  //   url: '/machine1',
  //   iconComponent: { name: 'cil-puzzle' },
  //   badge: {
  //     color: 'info',
  //     text: '1-13'
  //   }
  // },
  // {
  //   name: 'Machines',
  //   url: '/machine1/machine10',
  //   // linkProps: { fragment: '/machine10' },
  //   iconComponent: { name: 'cil-puzzle' },
  //   badge: {
  //     color: 'info',
  //     text: '14-27'
  //   }
  // }, 
  {
    name: 'Other Forms',
    title: true
  },
  {
    name: 'Main Manu',
    url: '/base',
    iconComponent: { name: 'cil-Menu' },
    children: [
      {
        name: 'Plant Details',
        url: '/base/plantdetails'
      },
      {
        name: 'CNC Operator Info',
        url: '/base/cnc-operatordetails'
      },
      {
        name: 'Machine Info',
        url: '/base/machineinfo'
      },
      {
        name: 'Work Order Entry',
        url: '/base/workorder'
      },
      {
        name: 'Downtime Code Entry',
        url: '/base/downtime'
      },
      {
        name: 'Message Setting',
        url: '/base/messagesetting'
      }, 
    ]
  }, 
  {
    name: 'Production Details',
    url: '/forms',
    iconComponent: { name: 'cil-List' },
    children: [
      {
        name: 'Production Report',
        url: '/forms/production-report'
      },
      {
        name: 'Production Count Report',
        url: '/forms/production-count-report'
      },
      {
        name: 'Rejection Data Entry',
        url: '/forms/rejection-data-entry'
      },
      {
        name: 'Loss Analysis',
        url: '/forms/loss-analysis'
      },
      {
        name: 'Capacity Utilization',
        url: '/forms/capacity-utilization-graph'
      },
      {
        name: 'APQ Report',
        url: '/forms/apq-report'
      },
      {
        name: 'OEE Report',
        url: '/forms/oee-report'
      },
      {
        name: 'MinuteWise Graph',
        url: '/forms/minutewise-graph'
      }
    ]
  }, 
  {
    title: true,
    name: 'Emails'
  },
  {
    name: 'Send Mail',
    url: '',
    iconComponent: { name: 'cil-Inbox' }
  },
  {
    name: 'Monthly Mail',
    url: '',
    iconComponent: { name: 'cil-File' }
  }, 
];
