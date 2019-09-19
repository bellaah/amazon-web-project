class Observer{
  constructor () {
    this.data;
  }
  subscribe(publisher) {
    this.publisher = publisher;
    this.publisher.add(this);
  }
  update() {
    this.data = this.publisher.state;   //클릭이벤트가 발생한 번호 
    
  }
  unsubscribe() {
    this.publisher.delete(this);
  }
  
}

class Publisher{
  constructor() {
    this.observers = [];
    this.state = null; 
  }
  add(observer) {
    this.observers.push(observer);
  }
  delete(observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }
  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }
  changState() {
    this.state =  ""; //state를 클릭이벤트가 발생한 번호로 바꾸기
    this.notifyObservers()
  }
}

const publisher = new Publisher();

const sub1 = new Observer(publisher);
const sub2 = new Observer(publisher);
const sub3 = new Observer(publisher);
const sub4 = new Observer(publisher);
const sub5 = new Observer(publisher);

sub1.subscribe(publisher);
sub2.subscribe(publisher);
sub3.subscribe(publisher);
sub4.subscribe(publisher);
sub5.subscribe(publisher);