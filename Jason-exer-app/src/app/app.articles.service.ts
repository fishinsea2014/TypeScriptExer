import { Injectable } from '@angular/core';
import {ArticleList} from './service/articlesList';
import {ArticleListPre} from './service/articlesListPre';

import { Article } from './service/article.interface';

@Injectable()
export class ArticleService {
    getList(): Promise<Article[]> {
        return Promise.resolve(ArticleList);
    }

    getListPre(): Promise<Article[]> {
        return Promise.resolve(ArticleListPre);
    }
}