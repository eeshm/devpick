"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs/promises");
var path = require("path");
var dotenv = require("dotenv");
var supabase_js_1 = require("@supabase/supabase-js");
dotenv.config({ path: path.resolve(__dirname, '../.env') });
var supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
var supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
var supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseAnonKey);
var dataDir = path.resolve(__dirname, '../data');
function loadJSON(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var filePath, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filePath = path.join(dataDir, fileName);
                    return [4 /*yield*/, fs.readFile(filePath, 'utf-8')];
                case 1:
                    content = _a.sent();
                    return [2 /*return*/, JSON.parse(content)];
            }
        });
    });
}
function insertCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var categories, _i, categories_1, category, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadJSON('categories.json')];
                case 1:
                    categories = _a.sent();
                    console.log("Inserting ".concat(categories.length, " categories..."));
                    _i = 0, categories_1 = categories;
                    _a.label = 2;
                case 2:
                    if (!(_i < categories_1.length)) return [3 /*break*/, 5];
                    category = categories_1[_i];
                    return [4 /*yield*/, supabase
                            .from('categories')
                            .upsert(category, { onConflict: 'slug' })];
                case 3:
                    error = (_a.sent()).error;
                    if (error) {
                        console.error("Failed to insert category \"".concat(category.name, "\":"), error.message);
                        process.exit(1);
                    }
                    console.log("Category inserted: ".concat(category.name));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function insertTechStacks(fileName, categorySlug) {
    return __awaiter(this, void 0, void 0, function () {
        var techStacks, _i, techStacks_1, stack, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadJSON(fileName)];
                case 1:
                    techStacks = _a.sent();
                    console.log("Inserting ".concat(techStacks.length, " stacks from ").concat(fileName, "..."));
                    _i = 0, techStacks_1 = techStacks;
                    _a.label = 2;
                case 2:
                    if (!(_i < techStacks_1.length)) return [3 /*break*/, 5];
                    stack = techStacks_1[_i];
                    stack.category_slug = categorySlug;
                    return [4 /*yield*/, supabase
                            .from('tech_stacks')
                            .upsert(stack, { onConflict: 'slug' })];
                case 3:
                    error = (_a.sent()).error;
                    if (error) {
                        console.error("Failed to insert stack \"".concat(stack.name, "\":"), error.message);
                        process.exit(1);
                    }
                    console.log("Stack inserted: ".concat(stack.name));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var fileCategoryMap, _i, _a, _b, fileName, categorySlug, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, insertCategories()];
                case 1:
                    _c.sent();
                    fileCategoryMap = {
                        'frontend.json': 'frontend-development',
                        'backend.json': 'backend-development',
                        'devops-cloud.json': 'devops-cloud',
                        'mobile.json': 'mobile-development',
                        'ai-ml.json': 'ai-ml-data-science',
                        'testing.json': 'testing-frameworks',
                        'database.json': 'database-systems',
                        'cssframeworks.json': 'css-frameworks'
                    };
                    _i = 0, _a = Object.entries(fileCategoryMap);
                    _c.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    _b = _a[_i], fileName = _b[0], categorySlug = _b[1];
                    return [4 /*yield*/, insertTechStacks(fileName, categorySlug)];
                case 3:
                    _c.sent();
                    _c.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log('Seeding completed successfully!');
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _c.sent();
                    console.error('Seeding failed:', err_1.message);
                    process.exit(1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
seed();
