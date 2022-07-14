import AddUserView from "@/src/views/AddUserView.vue";
import {shallowMount} from "@vue/test-utils";

describe("AddUserView.vue", ()=> {
  let wrapper;
  beforeEach(()=> {
    wrapper = shallowMount(AddUserView, {
      methods: { submitClicked: ()=> {}}
    })
  })
  
  it("renders", ()=> {
    expect(wrapper.exists()).toBe(true);
  })

})
