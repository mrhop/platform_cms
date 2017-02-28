/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./ckeditor.scss');
const defaultRows = 10
export default class CKEditor extends React.Component {
    constructor(props) {
        super(props);
        this.elementName = this.props.id;
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {

        const rule = this.props.rule;
        let eleClassNames = classNames('form-group', (rule.validated === undefined || rule.validated) ? null : 'has-error', rule.className);
        let eleStyle = rule.type === 'hidden' ? {display: 'none'} : null;
        //validate 需要class 和tooltip放置，根据props的改变来做
        //data-validate = {rule.validate} validate shall not be here
        let inputClassNames = classNames('form-control', 'ckeditor');
        let labelClassNames = null
        let errorBlockClassNames = 'error-block';


        let ckeditorElement = <textarea className={inputClassNames} onClick={this.props.onclick}
                                        rows={(this.props.formType === 'inlineForm' || this.props.formType === 'blockForm') ? 1 : (rule.rows ? rule.rows : defaultRows) }
                                        id={this.props.id} name={rule.name}
                                        defaultValue={this.props.data[this.props.name] ? this.props.data[this.props.name] : ''}>

            </textarea>
        switch (this.props.formType) {
            case  'horizontalForm':
                labelClassNames = 'col-sm-2'
                errorBlockClassNames = classNames(errorBlockClassNames, 'col-sm-10')
                ckeditorElement = <div className="col-sm-10 input-wrapper">
                    {ckeditorElement}
                </div>
            case  'inlineForm':
                ckeditorElement =
                    <div className="textarea-first-wrapper">{ckeditorElement}</div>
        }

        return <div className={eleClassNames} style={eleStyle}><label
            htmlFor={this.props.id}
            className={labelClassNames}>{rule.label ? rule.label : null}{rule.label && rule.required ?
            <span className="required">*</span> : null}</label>
            {ckeditorElement }
            {(rule.validated === undefined || rule.validated) ? null :
                <span className={errorBlockClassNames}>{rule.errorMsg}</span>}
        </div>;
    }


    componentDidMount() {
        let configuration = {
            language: 'zh-cn',
            uiColor: '#9AB8F3',
            toolbar: [
                {name: 'document', items: ['Print']},
                {name: 'clipboard', items: ['Undo', 'Redo']},
                {name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize']},
                {
                    name: 'basicstyles',
                    items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting']
                },
                {name: 'colors', items: ['TextColor', 'BGColor']},
                {name: 'align', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
                {name: 'links', items: ['Link', 'Unlink']},
                {
                    name: 'paragraph',
                    items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']
                },
                {name: 'insert', items: ['Image', 'EmbedSemantic', 'Flash', 'Table', 'HorizontalRule', 'SpecialChar']},
                {name: 'tools', items: ['Maximize']},
                {name: 'document', items: ['Source']},
                {name: 'editing', items: ['Scayt']}
            ],
            //考虑css的植入，从服务器来，basic部分的css，就像basic.css include bootstrap animated.css 等，就足够了
            //contentsCss: [ 'https://cdn.ckeditor.com/4.6.1/full-all/contents.css', 'mystyles.css' ],
            bodyClass: 'main-content',
            extraPlugins: 'tableresize,uploadimage,uploadfile,embedsemantic,flash',
            filebrowserBrowseUrl: baseUrl + "filebrowser.html",
            filebrowserImageBrowseUrl: baseUrl + "filebrowser.html?type=image",
            filebrowserFlashBrowseUrl: baseUrl + "filebrowser.html?type=flash",
            filebrowserUploadUrl: baseUrl + "filelibrary/upload/byckeditor",
            filebrowserImageUploadUrl: baseUrl + "filelibrary/upload/byckeditor?type=image",
            filebrowserFlashUploadUrl: baseUrl + "filelibrary/upload/byckeditor?type=flash"
        };
        CKEDITOR.replace(this.elementName, configuration);
        CKEDITOR.instances[this.elementName].on("change", function () {
            let data = CKEDITOR.instances[this.elementName].getData();
            this.props.data[this.props.name] = data;
            if (this.props.rule.validated != undefined) {
                this.props.rule.validated = true;
            }
            if (this.props.rule.errorMsg != undefined) {
                this.props.rule.errorMsg = null;
            }
            this.props.onchange && this.props.onchange(CKEDITOR.instances[this.elementName]);
            this.forceUpdate();
        }.bind(this));
    }
}