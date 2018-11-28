function util_decorator(target) {
    target.prototype.handleName = (name) => {
        switch (name) {
            case "星厨课堂":
            case "线下课程":
            case "热搜榜":
                {
                    return {
                        IconHeight: "157.5px",
                        IconWidth: "157.5px"
                    }
                }
            case "精选·推荐":
            case "VIP精选推荐":
            case "新菜榜":
                {
                    return {
                        IconHeight: "202.484px",
                        IconWidth: "337.5px"
                    }
                }
            default:
                {
                    return {
                        IconHeight: "219.665px",
                        IconWidth: "157.5px"
                    }
                }
        }
    }
}
export { util_decorator }