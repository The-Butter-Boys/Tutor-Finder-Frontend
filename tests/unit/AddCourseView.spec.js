import AddCourseView from "@/src/views/AddCourseView.vue";
import {shallowMount} from "@vue/test-utils";

describe("AddCourseView.vue", ()=> {
it("is returned", async () => {
    const mockMethod = jest.spyOn(AddCourseView.methods, 'submitClicked');
    await shallowMount(AddCourseView).find('button').trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })
})
