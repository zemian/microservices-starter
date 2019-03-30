/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import axios from 'axios';

import * as config from '@/shared/config/config';
import EmployeeDetailComponent from '@/entities/employee/employee-details.vue';
import EmployeeClass from '@/entities/employee/employee-details.component';
import EmployeeService from '@/entities/employee/employee.service';

const localVue = createLocalVue();
const mockedAxios: any = axios;

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

jest.mock('axios', () => ({
  get: jest.fn()
}));

describe('Component Tests', () => {
  describe('Employee Management Detail Component', () => {
    let wrapper: Wrapper<EmployeeClass>;
    let comp: EmployeeClass;

    beforeEach(() => {
      mockedAxios.get.mockReset();
      mockedAxios.get.mockReturnValue(Promise.resolve({}));

      wrapper = shallowMount<EmployeeClass>(EmployeeDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { employeeService: () => new EmployeeService() }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', async () => {
      it('Should call load all on init', async () => {
        // GIVEN
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: { id: 123 } }));

        // WHEN
        comp.retrieveEmployee(123);
        await comp.$nextTick();

        // THEN
        expect(comp.employee).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
