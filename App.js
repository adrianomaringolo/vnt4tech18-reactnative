import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import {createStackNavigator} from 'react-navigation';

export default createStackNavigator (
  {JobList: JobList, JobDetails: JobDetails},
  
  {initialRouteName: 'JobList'}
);
