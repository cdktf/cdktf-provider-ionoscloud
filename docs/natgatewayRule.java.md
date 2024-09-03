# `natgatewayRule` Submodule <a name="`natgatewayRule` Submodule" id="@cdktf/provider-ionoscloud.natgatewayRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NatgatewayRule <a name="NatgatewayRule" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule ionoscloud_natgateway_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRule;

NatgatewayRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
    .natgatewayId(java.lang.String)
    .publicIp(java.lang.String)
    .sourceSubnet(java.lang.String)
//  .id(java.lang.String)
//  .protocol(java.lang.String)
//  .targetPortRange(NatgatewayRuleTargetPortRange)
//  .targetSubnet(java.lang.String)
//  .timeouts(NatgatewayRuleTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#datacenter_id NatgatewayRule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.natgatewayId">natgatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#natgateway_id NatgatewayRule#natgateway_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.publicIp">publicIp</a></code> | <code>java.lang.String</code> | Public IP address of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.sourceSubnet">sourceSubnet</a></code> | <code>java.lang.String</code> | Source subnet of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#id NatgatewayRule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Protocol of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.targetPortRange">targetPortRange</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | target_port_range block. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.targetSubnet">targetSubnet</a></code> | <code>java.lang.String</code> | Target or destination subnet of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of the NAT gateway rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#datacenter_id NatgatewayRule#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#name NatgatewayRule#name}

---

##### `natgatewayId`<sup>Required</sup> <a name="natgatewayId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.natgatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#natgateway_id NatgatewayRule#natgateway_id}.

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.publicIp"></a>

- *Type:* java.lang.String

Public IP address of the NAT gateway rule.

Specifies the address used for masking outgoing packets source address field. Should be one of the customer reserved IP address already configured on the NAT gateway resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#public_ip NatgatewayRule#public_ip}

---

##### `sourceSubnet`<sup>Required</sup> <a name="sourceSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.sourceSubnet"></a>

- *Type:* java.lang.String

Source subnet of the NAT gateway rule.

For SNAT rules it specifies which packets this translation rule applies to based on the packets source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#source_subnet NatgatewayRule#source_subnet}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#id NatgatewayRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Protocol of the NAT gateway rule.

Defaults to ALL. If protocol is 'ICMP' then targetPortRange start and end cannot be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#protocol NatgatewayRule#protocol}

---

##### `targetPortRange`<sup>Optional</sup> <a name="targetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.targetPortRange"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

target_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#target_port_range NatgatewayRule#target_port_range}

---

##### `targetSubnet`<sup>Optional</sup> <a name="targetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.targetSubnet"></a>

- *Type:* java.lang.String

Target or destination subnet of the NAT gateway rule.

For SNAT rules it specifies which packets this translation rule applies to based on the packets destination IP address. If none is provided, rule will match any address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#target_subnet NatgatewayRule#target_subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#timeouts NatgatewayRule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#type NatgatewayRule#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTargetPortRange">putTargetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetPortRange">resetTargetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetSubnet">resetTargetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetPortRange` <a name="putTargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTargetPortRange"></a>

```java
public void putTargetPortRange(NatgatewayRuleTargetPortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTargetPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTimeouts"></a>

```java
public void putTimeouts(NatgatewayRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetId"></a>

```java
public void resetId()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetTargetPortRange` <a name="resetTargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetPortRange"></a>

```java
public void resetTargetPortRange()
```

##### `resetTargetSubnet` <a name="resetTargetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTargetSubnet"></a>

```java
public void resetTargetSubnet()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NatgatewayRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRule;

NatgatewayRule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRule;

NatgatewayRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRule;

NatgatewayRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRule;

NatgatewayRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NatgatewayRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NatgatewayRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NatgatewayRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NatgatewayRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NatgatewayRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRange">targetPortRange</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference">NatgatewayRuleTargetPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference">NatgatewayRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayIdInput">natgatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIpInput">publicIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnetInput">sourceSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRangeInput">targetPortRangeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnetInput">targetSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayId">natgatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnet">sourceSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnet">targetSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetPortRange`<sup>Required</sup> <a name="targetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRange"></a>

```java
public NatgatewayRuleTargetPortRangeOutputReference getTargetPortRange();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference">NatgatewayRuleTargetPortRangeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeouts"></a>

```java
public NatgatewayRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference">NatgatewayRuleTimeoutsOutputReference</a>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `natgatewayIdInput`<sup>Optional</sup> <a name="natgatewayIdInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayIdInput"></a>

```java
public java.lang.String getNatgatewayIdInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `publicIpInput`<sup>Optional</sup> <a name="publicIpInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIpInput"></a>

```java
public java.lang.String getPublicIpInput();
```

- *Type:* java.lang.String

---

##### `sourceSubnetInput`<sup>Optional</sup> <a name="sourceSubnetInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnetInput"></a>

```java
public java.lang.String getSourceSubnetInput();
```

- *Type:* java.lang.String

---

##### `targetPortRangeInput`<sup>Optional</sup> <a name="targetPortRangeInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetPortRangeInput"></a>

```java
public NatgatewayRuleTargetPortRange getTargetPortRangeInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

---

##### `targetSubnetInput`<sup>Optional</sup> <a name="targetSubnetInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnetInput"></a>

```java
public java.lang.String getTargetSubnetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `natgatewayId`<sup>Required</sup> <a name="natgatewayId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.natgatewayId"></a>

```java
public java.lang.String getNatgatewayId();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

---

##### `sourceSubnet`<sup>Required</sup> <a name="sourceSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.sourceSubnet"></a>

```java
public java.lang.String getSourceSubnet();
```

- *Type:* java.lang.String

---

##### `targetSubnet`<sup>Required</sup> <a name="targetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.targetSubnet"></a>

```java
public java.lang.String getTargetSubnet();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NatgatewayRuleConfig <a name="NatgatewayRuleConfig" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRuleConfig;

NatgatewayRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
    .natgatewayId(java.lang.String)
    .publicIp(java.lang.String)
    .sourceSubnet(java.lang.String)
//  .id(java.lang.String)
//  .protocol(java.lang.String)
//  .targetPortRange(NatgatewayRuleTargetPortRange)
//  .targetSubnet(java.lang.String)
//  .timeouts(NatgatewayRuleTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#datacenter_id NatgatewayRule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.natgatewayId">natgatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#natgateway_id NatgatewayRule#natgateway_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | Public IP address of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.sourceSubnet">sourceSubnet</a></code> | <code>java.lang.String</code> | Source subnet of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#id NatgatewayRule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Protocol of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetPortRange">targetPortRange</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | target_port_range block. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetSubnet">targetSubnet</a></code> | <code>java.lang.String</code> | Target or destination subnet of the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of the NAT gateway rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#datacenter_id NatgatewayRule#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#name NatgatewayRule#name}

---

##### `natgatewayId`<sup>Required</sup> <a name="natgatewayId" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.natgatewayId"></a>

```java
public java.lang.String getNatgatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#natgateway_id NatgatewayRule#natgateway_id}.

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

Public IP address of the NAT gateway rule.

Specifies the address used for masking outgoing packets source address field. Should be one of the customer reserved IP address already configured on the NAT gateway resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#public_ip NatgatewayRule#public_ip}

---

##### `sourceSubnet`<sup>Required</sup> <a name="sourceSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.sourceSubnet"></a>

```java
public java.lang.String getSourceSubnet();
```

- *Type:* java.lang.String

Source subnet of the NAT gateway rule.

For SNAT rules it specifies which packets this translation rule applies to based on the packets source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#source_subnet NatgatewayRule#source_subnet}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#id NatgatewayRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Protocol of the NAT gateway rule.

Defaults to ALL. If protocol is 'ICMP' then targetPortRange start and end cannot be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#protocol NatgatewayRule#protocol}

---

##### `targetPortRange`<sup>Optional</sup> <a name="targetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetPortRange"></a>

```java
public NatgatewayRuleTargetPortRange getTargetPortRange();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

target_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#target_port_range NatgatewayRule#target_port_range}

---

##### `targetSubnet`<sup>Optional</sup> <a name="targetSubnet" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.targetSubnet"></a>

```java
public java.lang.String getTargetSubnet();
```

- *Type:* java.lang.String

Target or destination subnet of the NAT gateway rule.

For SNAT rules it specifies which packets this translation rule applies to based on the packets destination IP address. If none is provided, rule will match any address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#target_subnet NatgatewayRule#target_subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.timeouts"></a>

```java
public NatgatewayRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#timeouts NatgatewayRule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#type NatgatewayRule#type}

---

### NatgatewayRuleTargetPortRange <a name="NatgatewayRuleTargetPortRange" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRuleTargetPortRange;

NatgatewayRuleTargetPortRange.builder()
//  .end(java.lang.Number)
//  .start(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.end">end</a></code> | <code>java.lang.Number</code> | Target port range end associated with the NAT gateway rule. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.start">start</a></code> | <code>java.lang.Number</code> | Target port range start associated with the NAT gateway rule. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

Target port range end associated with the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#end NatgatewayRule#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

Target port range start associated with the NAT gateway rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#start NatgatewayRule#start}

---

### NatgatewayRuleTimeouts <a name="NatgatewayRuleTimeouts" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRuleTimeouts;

NatgatewayRuleTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#create NatgatewayRule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#default NatgatewayRule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#delete NatgatewayRule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#update NatgatewayRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#create NatgatewayRule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#default NatgatewayRule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#delete NatgatewayRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/natgateway_rule#update NatgatewayRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NatgatewayRuleTargetPortRangeOutputReference <a name="NatgatewayRuleTargetPortRangeOutputReference" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRuleTargetPortRangeOutputReference;

new NatgatewayRuleTargetPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetEnd"></a>

```java
public void resetEnd()
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.resetStart"></a>

```java
public void resetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.endInput">endInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.startInput">startInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.end">end</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.start">start</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.endInput"></a>

```java
public java.lang.Number getEndInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.startInput"></a>

```java
public java.lang.Number getStartInput();
```

- *Type:* java.lang.Number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRangeOutputReference.property.internalValue"></a>

```java
public NatgatewayRuleTargetPortRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTargetPortRange">NatgatewayRuleTargetPortRange</a>

---


### NatgatewayRuleTimeoutsOutputReference <a name="NatgatewayRuleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.natgateway_rule.NatgatewayRuleTimeoutsOutputReference;

new NatgatewayRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.natgatewayRule.NatgatewayRuleTimeouts">NatgatewayRuleTimeouts</a>

---



