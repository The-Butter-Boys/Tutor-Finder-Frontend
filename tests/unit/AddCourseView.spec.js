import AddCourseView from "@/src/views/AddCourseView.vue";
import {shallowMount} from "@vue/test-utils";

describe("AddCourseView.vue", ()=> {
  let wrapper;
  beforeEach(()=> {
    wrapper = shallowMount(AddCourseView, {
      methods: { submitClicked: ()=> {}}
    })
  })
  
  it("renders", ()=> {
    expect(wrapper.exists()).toBe(true);
  })

})
