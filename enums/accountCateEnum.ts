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

const accountCateEnum = new CategoryManager();
accountCateEnum.addCategory("餐饮", "icon-canyin", "#FF5733");
accountCateEnum.addCategory("日用", "icon-riyongpin", "#3366FF");
accountCateEnum.addCategory("交通", "icon-jiaotongyunshu", "#FFC300");
accountCateEnum.addCategory("娱乐", "icon-yule", "#3366FF");
accountCateEnum.addCategory("旅行", "icon-lvhang", "#3366FF");
accountCateEnum.addCategory("购物", "icon-gouwuche", "#FF5733");
accountCateEnum.addCategory("通讯", "icon-leitongxunfuwux", "#3366FF");
accountCateEnum.addCategory("服饰", "icon-fushi", "#3366FF");
accountCateEnum.addCategory("住房", "icon-zhufang", "#FFC300");
accountCateEnum.addCategory("医疗", "icon-sharpicons_heart-cross", "#FFC300");
accountCateEnum.addCategory("学习", "icon-xuexi", "#FF5733");
accountCateEnum.addCategory("其他", "icon-qita", "#3366FF");

export default accountCateEnum;