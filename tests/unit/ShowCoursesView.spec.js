import ShowCoursesView from "@/src/views/ShowCoursesView.vue";
import {shallowMount} from "@vue/test-utils";

describe("ShowCoursesView.vue", ()=> {
  let wrapper;
  beforeEach(()=> {
    wrapper = shallowMount(ShowCoursesView, {
      methods: { created: ()=> {}}
    })
  })
  
  it("renders", ()=> {
    expect(wrapper.exists()).toBe(true);
  })

})
