import RegisterUserView from "@/views/RegisterUserView.vue";
import {shallowMount} from "@vue/test-utils";

describe("RegisterUserView.vue", ()=> {
  it("is returned", async () => {
    const mockMethod = jest.spyOn(RegisterUserView.methods, 'submitClicked');
    await shallowMount(RegisterUserView).find('button').trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

})
