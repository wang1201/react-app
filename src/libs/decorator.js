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


function inject_unount(target){
    let next = target.prototype.componentWillUnmount;
    //改裝componentWillUnmount,销毁的时候记录一下
    target.prototype.componentWillUnmount = function(){
        if(next) next.call(this,...arguments);
        this.unmount = true;
    }
    //对setState的改装，setState查看目前是否已经销毁
    let setState = target.prototype.setState
    target.prototype.setState = function(){
        if(this.unmount) return;
        setState.call(this,...arguments)
    }
}


export { util_decorator,inject_unount }

