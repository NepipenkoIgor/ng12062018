import {UsersFilterPipe} from './users-filter.pipe';
import {IUser} from '../services/users.service';

const users: IUser[] = [{
  'profileName': 'vladimir74',
  'firstName': 'Владимир',
  'surname': 'Лапенков',
  'photo': 'https://i.imgur.com/oV7MXRT.jpg',
  'country': 'ru'
}, {
  'profileName': 'arseny-matisov',
  'firstName': 'Арсений',
  'surname': 'Матисов',
  'photo': 'http://i.imgur.com/CKoAKqG.jpg',
  'country': 'ru'
}, {
  'profileName': 'fiodorusakov',
  'firstName': 'Федор',
  'surname': 'Усаков',
  'photo': 'http://i.imgur.com/W4XECPf.jpg',
  'country': 'ru'
}, {
  'profileName': 'elina4',
  'firstName': 'Элина',
  'surname': 'Разина',
  'photo': 'https://i.imgur.com/hKjcggc.jpg',
  'country': 'ru'
}, {
  'profileName': 'sergey47',
  'firstName': 'Сергей',
  'surname': 'Арефьев',
  'photo': 'https://i.imgur.com/z9XENgg.jpg',
  'country': 'ru'
}, {'profileName': 'aleksandr30', 'firstName': 'Aleksandr', 'surname': 'Savosh', 'country': 'ua'}, {
  'profileName': 'aleksey-kartushin',
  'firstName': 'Алексей',
  'surname': 'Картушин',
  'photo': 'https://i.imgur.com/7rF8VmJ.jpg',
  'country': 'ru'
}, {'profileName': 'olegrass', 'firstName': 'Олег', 'surname': 'Рассказов', 'country': 'ru'}, {
  'profileName': 'bacul',
  'firstName': 'Артём',
  'surname': 'Васильев',
  'country': 'ru'
}, {
  'profileName': 'anna-andriushkina',
  'firstName': 'Anna',
  'surname': 'Andriushkina',
  'photo': 'https://i.imgur.com/IsGK1ZO.jpg',
  'country': 'pl'
}, {
  'profileName': 'yana-bozhenko',
  'firstName': 'Яна',
  'surname': 'Боженко',
  'photo': 'https://i.imgur.com/kjfsOUk.jpg',
  'country': 'ru'
}, {
  'profileName': 'birdmanzs',
  'firstName': 'Виктор',
  'surname': 'Гинзбург',
  'photo': 'https://i.imgur.com/bkAWLak.jpg',
  'country': 'ru'
}, {'profileName': 'yuliya845', 'firstName': 'Юлия', 'surname': 'Омельченко', 'country': 'ru'}, {
  'profileName': 'max-che',
  'firstName': 'Максим',
  'surname': 'Чухлов',
  'country': 'ru'
}, {'profileName': 'roman864', 'firstName': 'Роман', 'surname': 'Калайтанов', 'country': 'ru'}];

describe('UsersFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new UsersFilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('should work correct', () => {
    const pipe = new UsersFilterPipe();
    const filteredUsers = pipe.transform(users, 'юл');
    expect(filteredUsers.length).toEqual(1);
  });
});
