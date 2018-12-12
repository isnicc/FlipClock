import DomComponent from './DomComponent';
import { isObject } from '../Helpers/Functions';

export default class Label extends DomComponent {

    /**
     * This class is used to add a label to the clock face.
     *
     * @memberof Components
     * @class Label
     * @extends Components.DomComponent
     * @param {Number|String|Object} label - The label attribute. If an object,
     *     it is assumed that it is the instance attributes.
     * @param {object|undefined} [attributes] - The instance attributes.
     */
    constructor(label, attributes) {
        super(Object.assign({
            label: label
        }, (isObject(label) ? label : null), attributes));
    }

}
