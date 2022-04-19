import './styles/index.css';
import { todoList } from './script/todoList';
import sampledata from './script/sampledata';
import render from './script/render';
import { cardModal } from './script/cardModal';
sampledata();

const modalWrapper = cardModal.createModal();
document.body.appendChild(modalWrapper);
