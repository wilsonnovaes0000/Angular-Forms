import { FormGroupState, createFormGroupState  } from '@ngrx-forms';


export interface MyFormState {
  formState: FormGroupState<Forms>;
}

export const initialMyFormState: MyFormState = {
  formState: createFormGroupState<Forms>('MyForm', {
    firstName: '',
    lastName: '',
  }),
};
