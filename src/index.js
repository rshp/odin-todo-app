import 'the-new-css-reset/css/reset.css';
import './styles/index.css';
import sampledata from './script/sampledata';
import render from './script/render';
import { localStorageManager } from './script/localStorageManager';

if (localStorageManager.isPopulated()) localStorageManager.postSavedList();
else sampledata();
