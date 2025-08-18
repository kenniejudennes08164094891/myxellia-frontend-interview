import { BehaviorSubject, Observable } from 'rxjs';

// Centered Modal
const emmitOpenModal$: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);

export const setOpenModal = (isOpen: boolean): void => {
    emmitOpenModal$.next(isOpen);
}

export const getOpenedModal:Observable<boolean | null> = emmitOpenModal$.asObservable();

// Calendar Modal

const emmitCalndarModal$: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);

export const setCalendarModal = (isOpen: boolean): void => {
    emmitCalndarModal$.next(isOpen);
}

export const getCalendarModal:Observable<boolean | null> = emmitCalndarModal$.asObservable();

