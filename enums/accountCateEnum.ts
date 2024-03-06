interface Category {
    id: number;
    name: string;
    icon: string;
    color: string;
}

class CategoryManager {
    private categories: Map<number, Category>;
    private nextId: number;

    constructor() {
        this.categories = new Map<number, Category>();
        this.nextId = 1;
    }

    addCategory(name: string, icon: string, color: string) {
        const category: Category = { id: this.nextId, name, icon, color };
        this.categories.set(this.nextId, category);
        this.nextId++;
    }

    updateCategory(id: number, newName: string, newIcon: string, newColor: string) {
        const category = this.categories.get(id);
        if (category) {
            category.name = newName;
            category.icon = newIcon;
            category.color = newColor;
            this.categories.set(id, category);
        }
    }

    getCategory(id: number): Category | undefined {
        return this.categories.get(id);
    }

    getAllCategories(): Category[] {
        return Array.from(this.categories.values());
    }

    deleteCategory(id: number) {
        this.categories.delete(id);
    }
}

const expenseCateEnum = new CategoryManager();
expenseCateEnum.addCategory("餐饮", "icon-canyin", "#76c681");
expenseCateEnum.addCategory("日用", "icon-riyongpin", "#13bceb");
expenseCateEnum.addCategory("交通", "icon-jiaotongyunshu", "#46c8ba");
expenseCateEnum.addCategory("娱乐", "icon-yule", "#7e7ce8");
expenseCateEnum.addCategory("旅行", "icon-lvhang", "#2799f9");
expenseCateEnum.addCategory("购物", "icon-gouwuche", "#f2b42d");
expenseCateEnum.addCategory("通讯", "icon-leitongxunfuwux", "#4b8cf2");
expenseCateEnum.addCategory("服饰", "icon-fushi", "#8dba5e");
expenseCateEnum.addCategory("住房", "icon-zhufang", "#07bb72");
expenseCateEnum.addCategory("医疗", "icon-sharpicons_heart-cross", "#f85c45");
expenseCateEnum.addCategory("学习", "icon-xuexi", "#e4b42d");
expenseCateEnum.addCategory("其他", "icon-qita", "#3366FF");

const incomeCateEnum = new CategoryManager();
incomeCateEnum.addCategory("工资", "icon-gongzi", "#f58e3f");
incomeCateEnum.addCategory("兼职", "icon-jianzhi", "#72c786");
incomeCateEnum.addCategory("理财", "icon-licai", "#16b8e9");
incomeCateEnum.addCategory("礼金", "icon-wodeyuanbao", "#50c5b5");
incomeCateEnum.addCategory("外汇", "icon-jiaoyisuo", "#299af6");
incomeCateEnum.addCategory("贵金属", "icon-guijinshu", "#a780ea");
incomeCateEnum.addCategory("打赏", "icon-dashang", "#03bfff");
incomeCateEnum.addCategory("红包", "icon-hongbao", "#f36141");
incomeCateEnum.addCategory("借款", "icon-xiangtarenjieqian", "#f88710");
incomeCateEnum.addCategory("报销", "icon-baoxiao", "#11c1dc");
incomeCateEnum.addCategory("房产", "icon-sanfangchanpin", "#9887ba");
incomeCateEnum.addCategory("其他", "icon-qita", "#3366FF");

export { expenseCateEnum, incomeCateEnum }