var sslaConfig = {
    autoLaunchFirstSco: true,
    setDataAjaxMethod: "POST",
    getDataAjaxMethod: "POST",
    setDataUrl: ${set_url},
    getDataUrl: ${get_url},
    openContentIn: ${open_content_in},
    courseId: ${course_id},
    courseDirectory: ${course_directory},
    studentId: ${student_id},
    studentName: ${student_name},
    singleScoView: "HIDE_ALL",
    popupMainContentMessageAfterOpen: function() {
        return '<a style="font-family: \'Open Sans\', Arial, sans-serif; font-size: 14px; color: #3384CA;" onclick="parent.ssla.ssla.popupManually()" href="#">Click here to open the content experience.</a>';
    },
    popupMainContentMessageFailed: function() {
        return '<a style="font-family: \'Open Sans\', Arial, sans-serif; font-size: 14px; color: #3384CA;" onclick="parent.ssla.ssla.popupManually()" href="#">Click here to open the content experience.</a>';
    }

};
