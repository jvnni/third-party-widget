/**
 * Module dependencies
 */
import React from 'react';

/**
 * Styles
 */
import styles from './styles.css';

/**
 * TokenForm
 */
class TokenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleFocus = this.handleFocus.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
    // styles = styles(props.color);
  }

  getInitState() {
    return {
      number: '',
      holdername: '',
      expiration: '',
      ccv: '',
      email: '',
      doctype: '',
      docnum: '',
    };
  }

  handleSubmit(eve) {
    eve.preventDefault();
    this.props.handleSubmit && this.props.handleSubmit(this.state);
  }

  handleChange(eve) {
    const data = {};
    data[eve.target.id] = eve.target.value;
    this.setState(data);
    this.props.handleChange && this.props.handleChange(data);
  }

  componentDidMount() {
    this.$number.focus();
  }

  render() {
    return (
      <form action="./" method="POST" className={styles.paymentForm + ' ' + 'paymentForm'} id="paymentForm" onSubmit={this.handleSubmit}>
        <div className={styles.fieldList + ' ' + 'fieldList'}>
          <div className={styles.field + ' ' + 'field'}>
            <label htmlFor="number" className={styles.field_label}>Credit Card Number</label>
            <input type="number" id="number" minLength="13" maxLength="16" placeholder="Credit Card Number" pattern="[0-9]{13,16}" ref={(e) => this.$number = e} required onChange={this.handleChange} className={styles.field_input} />
          </div>
          <div className={styles.field + ' ' + 'field'}>
            <label htmlFor="holdername" className={styles.field_label}>Name on card</label>
            <input type="text" id="holdername" placeholder="Name on card" required onChange={this.handleChange} className={styles.field_input} />
          </div>
          <div className={styles.field + ' ' + styles.field_alt + ' ' + 'field field-alt'}>
            <label htmlFor="expiration" className={styles.field_label}>Expiration Date</label>
            <input type="number" id="expiration" placeholder="MMYY" pattern="^((0[1-9])|(1[0-2]))\/(\d{2})$" required onChange={this.handleChange} className={styles.field_input} />
          </div>
          <div className={styles.field + ' ' + styles.field_alt + ' ' +  'field field-alt field-cvv'}>
            <label htmlFor="ccv" className={styles.field_label}>CCV</label>
            <input type="text" id="ccv" minLength="3" maxLength="4" placeholder="CCV" pattern="[0-9]{3,4}" required onChange={this.handleChange} className={styles.field_input} />
          </div>
          <div className={styles.field + ' ' + 'field'}>
            <label htmlFor="email" className={styles.field_label}>Email</label>
            <input type="email" name="email" id="email" placeholder="Email" required onChange={this.handleChange} className={styles.field_input} />
          </div>
          <div className="field field-dropdown" style={Object.assign({}, styles.field, styles.field_input)}>
            <label htmlFor="doctype" className={styles.field_label}>Document type</label>
            <select id="doctype" required onChange={this.handleChange} className={styles.field_input + ' ' + styles.field_select}>
              <option value="dni">Document type...</option>
              <option value="dni">DNI</option>
            </select>
          </div>
          <div className={styles.field + ' ' + 'field'}>
            <label htmlFor="docnum" className={styles.field_label}>Document number</label>
            <input type="number" name="docnum" id="docnum" placeholder="Document number" required onChange={this.handleChange} className={styles.field_input} />
          </div>
        </div>
        <div className="submit" style={styles.submit}>
          <button type="submit" className={styles.submit_button}>Pay now</button>
        </div>
      </form>
    );
  }
}

/**
 * Expose TokenForm
 */
export default TokenForm;
