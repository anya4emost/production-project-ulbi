import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toEqual('someClass');
    });
    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toEqual('someClass class1 class2');
    });
    test('with mods', () => {
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toEqual('someClass class1 class2 hovered scrollable');
    });
    test('with mode false', () => {
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'class1',
                'class2',
            ]),
        ).toEqual('someClass class1 class2 hovered');
    });
    test('with mode undefined', () => {
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'class1',
                'class2',
            ]),
        ).toEqual('someClass class1 class2 hovered');
    });
});
