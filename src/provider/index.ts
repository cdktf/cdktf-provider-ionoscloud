// https://www.terraform.io/docs/providers/ionoscloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IonoscloudProviderConfig {
  /**
  * IonosCloud REST API URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud#endpoint IonoscloudProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * IonosCloud password for API operations. If token is provided, token is preferred
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud#password IonoscloudProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud#retries IonoscloudProvider#retries}
  */
  readonly retries?: number;
  /**
  * IonosCloud bearer token for API operations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud#token IonoscloudProvider#token}
  */
  readonly token?: string;
  /**
  * IonosCloud username for API operations. If token is provided, token is preferred
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud#username IonoscloudProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud#alias IonoscloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/ionoscloud ionoscloud}
*/
export class IonoscloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ionoscloud ionoscloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IonoscloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IonoscloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.3.2',
        providerVersionConstraint: '~> 6.2'
      },
      terraformProviderSource: 'ionos-cloud/ionoscloud'
    });
    this._endpoint = config.endpoint;
    this._password = config.password;
    this._retries = config.retries;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      password: cdktf.stringToTerraform(this._password),
      retries: cdktf.numberToTerraform(this._retries),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
