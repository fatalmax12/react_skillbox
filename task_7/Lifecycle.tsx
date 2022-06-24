import { extend } from "expect";
import React from "react";

interface ILifecycleProps {
  someProp: number;
}

interface ILifecycleState {
  stateField: number;
  isMounted: boolean;
  hasError: boolean;
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
  constructor (props: ILifecycleProps) {
    super(props);
    this.state = { stateField: 0, isMounted: false, hasError: false };
    //this.handleClick = this.handleClick.bind(this);
  }
  //Данный компонент вызывается перед методом render. При производном состоянии. Применяется редко. К примеру положение скролла в чатах. Скрод при появлении сообщений должен быть внизу.
  static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
    return { stateField: props.someProp };
    // return null;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  //не использовать при PureComponent
  public shouldComponentUpdate(
    nextProps: Readonly<ILifecycleProps>,
    nextState: Readonly<ILifecycleState>,
    nextContext: any,
  ): boolean {
    // return this.state != nextState || this.props != nextProps;
    return false;
    //Не использовать JSON.stringify();
  }

  public render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }

    return <div /*onClick={this.handleClick}*/>1</div>;
  };

  //Сохранить текущее значение которое сейчас используется в браузере. Снапшот.
  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
  ): any | null {
    // return 1234; //Попадет в componentDidUpdate
    return null;
  }

  public componentDidUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
    snapshot ?: any
  ) {
    //Обязательно условие, что бы не попасть в бесконечный цикл.
    if (snapshot > 1000) {
      this.setState({});
    }
  }

  //Счетчики. Ресайзы окна. Таймеры.
  public componentDidMount() {
    // document.addEventListener('resize', () => {});
    // setTimeout(() => {}, 0);
    // //Прослеживание установленных компонентов
    // this.setState({ isMounted: true });
  }

  //Сайд эффекты для получения ошибки
  public componentDidCatch (error: Error, errorInfo: React.ErrorInfo) {
    //logError(errorInfo.componentStack);
  }

  //К примеру отписываться от подписок, что бы не хранить все те подписки, которые завели в cdMount. Можем обнулять все таймеры.
  public componentWillUnmount() {
    // document.removeEventListener('resize', () => {});
  }

  //Вариант стрелочной функции вызыват биндинг
  // private handleClick = () => {
  //   this.setState({ stateField: 1 });
  // }
}
