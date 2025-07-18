/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIonoscloudApplicationLoadbalancerForwardingruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}
  */
  readonly applicationLoadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Application Load Balancer forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#name DataIonoscloudApplicationLoadbalancerForwardingrule#name}
  */
  readonly name?: string;
  /**
  * Whether partial matching is allowed or not when using name argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#partial_match DataIonoscloudApplicationLoadbalancerForwardingrule#partial_match}
  */
  readonly partialMatch?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#timeouts DataIonoscloudApplicationLoadbalancerForwardingrule#timeouts}
  */
  readonly timeouts?: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts;
}
export interface DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions {
}

export function dataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsToTerraform(struct?: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsToHclTerraform(struct?: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference {
    return new DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules {
}

export function dataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesToTerraform(struct?: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesToHclTerraform(struct?: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // drop_query - computed: true, optional: false, required: false
  public get dropQuery() {
    return this.getBooleanAttribute('drop_query');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // response_message - computed: true, optional: false, required: false
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // target_group - computed: true, optional: false, required: false
  public get targetGroup() {
    return this.getStringAttribute('target_group');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference {
    return new DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#create DataIonoscloudApplicationLoadbalancerForwardingrule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#default DataIonoscloudApplicationLoadbalancerForwardingrule#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#delete DataIonoscloudApplicationLoadbalancerForwardingrule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#update DataIonoscloudApplicationLoadbalancerForwardingrule#update}
  */
  readonly update?: string;
}

export function dataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsToTerraform(struct?: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsToHclTerraform(struct?: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule}
*/
export class DataIonoscloudApplicationLoadbalancerForwardingrule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_application_loadbalancer_forwardingrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIonoscloudApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIonoscloudApplicationLoadbalancerForwardingrule to import
  * @param importFromId The id of the existing DataIonoscloudApplicationLoadbalancerForwardingrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIonoscloudApplicationLoadbalancerForwardingrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_application_loadbalancer_forwardingrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/data-sources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIonoscloudApplicationLoadbalancerForwardingruleConfig
  */
  public constructor(scope: Construct, id: string, config: DataIonoscloudApplicationLoadbalancerForwardingruleConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_application_loadbalancer_forwardingrule',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.11',
        providerVersionConstraint: '~> 6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationLoadbalancerId = config.applicationLoadbalancerId;
    this._datacenterId = config.datacenterId;
    this._id = config.id;
    this._name = config.name;
    this._partialMatch = config.partialMatch;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_loadbalancer_id - computed: false, optional: false, required: true
  private _applicationLoadbalancerId?: string; 
  public get applicationLoadbalancerId() {
    return this.getStringAttribute('application_loadbalancer_id');
  }
  public set applicationLoadbalancerId(value: string) {
    this._applicationLoadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLoadbalancerIdInput() {
    return this._applicationLoadbalancerId;
  }

  // client_timeout - computed: true, optional: false, required: false
  public get clientTimeout() {
    return this.getNumberAttribute('client_timeout');
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // http_rules - computed: true, optional: false, required: false
  private _httpRules = new DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList(this, "http_rules", false);
  public get httpRules() {
    return this._httpRules;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // listener_ip - computed: true, optional: false, required: false
  public get listenerIp() {
    return this.getStringAttribute('listener_ip');
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partial_match - computed: false, optional: true, required: false
  private _partialMatch?: boolean | cdktf.IResolvable; 
  public get partialMatch() {
    return this.getBooleanAttribute('partial_match');
  }
  public set partialMatch(value: boolean | cdktf.IResolvable) {
    this._partialMatch = value;
  }
  public resetPartialMatch() {
    this._partialMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMatchInput() {
    return this._partialMatch;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // server_certificates - computed: true, optional: false, required: false
  public get serverCertificates() {
    return cdktf.Fn.tolist(this.getListAttribute('server_certificates'));
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_loadbalancer_id: cdktf.stringToTerraform(this._applicationLoadbalancerId),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partial_match: cdktf.booleanToTerraform(this._partialMatch),
      timeouts: dataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._applicationLoadbalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_match: {
        value: cdktf.booleanToHclTerraform(this._partialMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
