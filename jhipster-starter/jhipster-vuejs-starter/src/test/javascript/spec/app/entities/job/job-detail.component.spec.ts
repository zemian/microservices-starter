/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import axios from 'axios';

import * as config from '@/shared/config/config';
import JobDetailComponent from '@/entities/job/job-details.vue';
import JobClass from '@/entities/job/job-details.component';
import JobService from '@/entities/job/job.service';

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
  describe('Job Management Detail Component', () => {
    let wrapper: Wrapper<JobClass>;
    let comp: JobClass;

    beforeEach(() => {
      mockedAxios.get.mockReset();
      mockedAxios.get.mockReturnValue(Promise.resolve({}));

      wrapper = shallowMount<JobClass>(JobDetailComponent, { store, i18n, localVue, provide: { jobService: () => new JobService() } });
      comp = wrapper.vm;
    });

    describe('OnInit', async () => {
      it('Should call load all on init', async () => {
        // GIVEN
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: { id: 123 } }));

        // WHEN
        comp.retrieveJob(123);
        await comp.$nextTick();

        // THEN
        expect(comp.job).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
