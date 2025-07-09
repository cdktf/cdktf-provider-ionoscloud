# `applicationLoadbalancer` Submodule <a name="`applicationLoadbalancer` Submodule" id="@cdktf/provider-ionoscloud.applicationLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadbalancer <a name="ApplicationLoadbalancer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer ionoscloud_application_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancer;

ApplicationLoadbalancer.Builder.create(Construct scope, java.lang.String id)
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
    .listenerLan(java.lang.Number)
    .name(java.lang.String)
    .targetLan(java.lang.Number)
//  .centralLogging(java.lang.Boolean)
//  .centralLogging(IResolvable)
//  .flowlog(ApplicationLoadbalancerFlowlog)
//  .id(java.lang.String)
//  .ips(java.util.List<java.lang.String>)
//  .lbPrivateIps(java.util.List<java.lang.String>)
//  .loggingFormat(java.lang.String)
//  .timeouts(ApplicationLoadbalancerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.listenerLan">listenerLan</a></code> | <code>java.lang.Number</code> | ID of the listening (inbound) LAN. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.targetLan">targetLan</a></code> | <code>java.lang.Number</code> | ID of the balanced private target LAN (outbound). |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.centralLogging">centralLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn logging on and off for this product. Default value is 'false'. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.flowlog">flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a></code> | flowlog block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#id ApplicationLoadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | Collection of the Application Load Balancer IP addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.lbPrivateIps">lbPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | Collection of private IP addresses with the subnet mask of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.loggingFormat">loggingFormat</a></code> | <code>java.lang.String</code> | Specifies the format of the logs. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}.

---

##### `listenerLan`<sup>Required</sup> <a name="listenerLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.listenerLan"></a>

- *Type:* java.lang.Number

ID of the listening (inbound) LAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#listener_lan ApplicationLoadbalancer#listener_lan}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Application Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#name ApplicationLoadbalancer#name}

---

##### `targetLan`<sup>Required</sup> <a name="targetLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.targetLan"></a>

- *Type:* java.lang.Number

ID of the balanced private target LAN (outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#target_lan ApplicationLoadbalancer#target_lan}

---

##### `centralLogging`<sup>Optional</sup> <a name="centralLogging" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.centralLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn logging on and off for this product. Default value is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#central_logging ApplicationLoadbalancer#central_logging}

---

##### `flowlog`<sup>Optional</sup> <a name="flowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.flowlog"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a>

flowlog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#flowlog ApplicationLoadbalancer#flowlog}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#id ApplicationLoadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.ips"></a>

- *Type:* java.util.List<java.lang.String>

Collection of the Application Load Balancer IP addresses.

(Inbound and outbound) IPs of the listenerLan are customer-reserved public IPs for the public Load Balancers, and private IPs for the private Load Balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#ips ApplicationLoadbalancer#ips}

---

##### `lbPrivateIps`<sup>Optional</sup> <a name="lbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.lbPrivateIps"></a>

- *Type:* java.util.List<java.lang.String>

Collection of private IP addresses with the subnet mask of the Application Load Balancer.

IPs must contain valid a subnet mask. If no IP is provided, the system will generate an IP with /24 subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#lb_private_ips ApplicationLoadbalancer#lb_private_ips}

---

##### `loggingFormat`<sup>Optional</sup> <a name="loggingFormat" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.loggingFormat"></a>

- *Type:* java.lang.String

Specifies the format of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#logging_format ApplicationLoadbalancer#logging_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#timeouts ApplicationLoadbalancer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putFlowlog">putFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetCentralLogging">resetCentralLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetFlowlog">resetFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLbPrivateIps">resetLbPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLoggingFormat">resetLoggingFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFlowlog` <a name="putFlowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putFlowlog"></a>

```java
public void putFlowlog(ApplicationLoadbalancerFlowlog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putFlowlog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts"></a>

```java
public void putTimeouts(ApplicationLoadbalancerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

---

##### `resetCentralLogging` <a name="resetCentralLogging" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetCentralLogging"></a>

```java
public void resetCentralLogging()
```

##### `resetFlowlog` <a name="resetFlowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetFlowlog"></a>

```java
public void resetFlowlog()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetId"></a>

```java
public void resetId()
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetIps"></a>

```java
public void resetIps()
```

##### `resetLbPrivateIps` <a name="resetLbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLbPrivateIps"></a>

```java
public void resetLbPrivateIps()
```

##### `resetLoggingFormat` <a name="resetLoggingFormat" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLoggingFormat"></a>

```java
public void resetLoggingFormat()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationLoadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancer;

ApplicationLoadbalancer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancer;

ApplicationLoadbalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancer;

ApplicationLoadbalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancer;

ApplicationLoadbalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationLoadbalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationLoadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.flowlog">flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference">ApplicationLoadbalancerFlowlogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference">ApplicationLoadbalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.centralLoggingInput">centralLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.flowlogInput">flowlogInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ipsInput">ipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIpsInput">lbPrivateIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLanInput">listenerLanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.loggingFormatInput">loggingFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLanInput">targetLanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.centralLogging">centralLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIps">lbPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLan">listenerLan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.loggingFormat">loggingFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLan">targetLan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flowlog`<sup>Required</sup> <a name="flowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.flowlog"></a>

```java
public ApplicationLoadbalancerFlowlogOutputReference getFlowlog();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference">ApplicationLoadbalancerFlowlogOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeouts"></a>

```java
public ApplicationLoadbalancerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference">ApplicationLoadbalancerTimeoutsOutputReference</a>

---

##### `centralLoggingInput`<sup>Optional</sup> <a name="centralLoggingInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.centralLoggingInput"></a>

```java
public java.lang.Object getCentralLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `flowlogInput`<sup>Optional</sup> <a name="flowlogInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.flowlogInput"></a>

```java
public ApplicationLoadbalancerFlowlog getFlowlogInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ipsInput"></a>

```java
public java.util.List<java.lang.String> getIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lbPrivateIpsInput`<sup>Optional</sup> <a name="lbPrivateIpsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIpsInput"></a>

```java
public java.util.List<java.lang.String> getLbPrivateIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listenerLanInput`<sup>Optional</sup> <a name="listenerLanInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLanInput"></a>

```java
public java.lang.Number getListenerLanInput();
```

- *Type:* java.lang.Number

---

##### `loggingFormatInput`<sup>Optional</sup> <a name="loggingFormatInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.loggingFormatInput"></a>

```java
public java.lang.String getLoggingFormatInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetLanInput`<sup>Optional</sup> <a name="targetLanInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLanInput"></a>

```java
public java.lang.Number getTargetLanInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

---

##### `centralLogging`<sup>Required</sup> <a name="centralLogging" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.centralLogging"></a>

```java
public java.lang.Object getCentralLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lbPrivateIps`<sup>Required</sup> <a name="lbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIps"></a>

```java
public java.util.List<java.lang.String> getLbPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listenerLan`<sup>Required</sup> <a name="listenerLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLan"></a>

```java
public java.lang.Number getListenerLan();
```

- *Type:* java.lang.Number

---

##### `loggingFormat`<sup>Required</sup> <a name="loggingFormat" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.loggingFormat"></a>

```java
public java.lang.String getLoggingFormat();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetLan`<sup>Required</sup> <a name="targetLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLan"></a>

```java
public java.lang.Number getTargetLan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadbalancerConfig <a name="ApplicationLoadbalancerConfig" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancerConfig;

ApplicationLoadbalancerConfig.builder()
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
    .listenerLan(java.lang.Number)
    .name(java.lang.String)
    .targetLan(java.lang.Number)
//  .centralLogging(java.lang.Boolean)
//  .centralLogging(IResolvable)
//  .flowlog(ApplicationLoadbalancerFlowlog)
//  .id(java.lang.String)
//  .ips(java.util.List<java.lang.String>)
//  .lbPrivateIps(java.util.List<java.lang.String>)
//  .loggingFormat(java.lang.String)
//  .timeouts(ApplicationLoadbalancerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.listenerLan">listenerLan</a></code> | <code>java.lang.Number</code> | ID of the listening (inbound) LAN. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.targetLan">targetLan</a></code> | <code>java.lang.Number</code> | ID of the balanced private target LAN (outbound). |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.centralLogging">centralLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turn logging on and off for this product. Default value is 'false'. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.flowlog">flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a></code> | flowlog block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#id ApplicationLoadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | Collection of the Application Load Balancer IP addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lbPrivateIps">lbPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | Collection of private IP addresses with the subnet mask of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.loggingFormat">loggingFormat</a></code> | <code>java.lang.String</code> | Specifies the format of the logs. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}.

---

##### `listenerLan`<sup>Required</sup> <a name="listenerLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.listenerLan"></a>

```java
public java.lang.Number getListenerLan();
```

- *Type:* java.lang.Number

ID of the listening (inbound) LAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#listener_lan ApplicationLoadbalancer#listener_lan}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Application Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#name ApplicationLoadbalancer#name}

---

##### `targetLan`<sup>Required</sup> <a name="targetLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.targetLan"></a>

```java
public java.lang.Number getTargetLan();
```

- *Type:* java.lang.Number

ID of the balanced private target LAN (outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#target_lan ApplicationLoadbalancer#target_lan}

---

##### `centralLogging`<sup>Optional</sup> <a name="centralLogging" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.centralLogging"></a>

```java
public java.lang.Object getCentralLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turn logging on and off for this product. Default value is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#central_logging ApplicationLoadbalancer#central_logging}

---

##### `flowlog`<sup>Optional</sup> <a name="flowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.flowlog"></a>

```java
public ApplicationLoadbalancerFlowlog getFlowlog();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a>

flowlog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#flowlog ApplicationLoadbalancer#flowlog}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#id ApplicationLoadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

Collection of the Application Load Balancer IP addresses.

(Inbound and outbound) IPs of the listenerLan are customer-reserved public IPs for the public Load Balancers, and private IPs for the private Load Balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#ips ApplicationLoadbalancer#ips}

---

##### `lbPrivateIps`<sup>Optional</sup> <a name="lbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lbPrivateIps"></a>

```java
public java.util.List<java.lang.String> getLbPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

Collection of private IP addresses with the subnet mask of the Application Load Balancer.

IPs must contain valid a subnet mask. If no IP is provided, the system will generate an IP with /24 subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#lb_private_ips ApplicationLoadbalancer#lb_private_ips}

---

##### `loggingFormat`<sup>Optional</sup> <a name="loggingFormat" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.loggingFormat"></a>

```java
public java.lang.String getLoggingFormat();
```

- *Type:* java.lang.String

Specifies the format of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#logging_format ApplicationLoadbalancer#logging_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.timeouts"></a>

```java
public ApplicationLoadbalancerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#timeouts ApplicationLoadbalancer#timeouts}

---

### ApplicationLoadbalancerFlowlog <a name="ApplicationLoadbalancerFlowlog" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancerFlowlog;

ApplicationLoadbalancerFlowlog.builder()
    .action(java.lang.String)
    .bucket(java.lang.String)
    .direction(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.action">action</a></code> | <code>java.lang.String</code> | Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.direction">direction</a></code> | <code>java.lang.String</code> | Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.name">name</a></code> | <code>java.lang.String</code> | The resource name. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#action ApplicationLoadbalancer#action}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#bucket ApplicationLoadbalancer#bucket}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#direction ApplicationLoadbalancer#direction}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#name ApplicationLoadbalancer#name}

---

### ApplicationLoadbalancerTimeouts <a name="ApplicationLoadbalancerTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancerTimeouts;

ApplicationLoadbalancerTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#create ApplicationLoadbalancer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#default ApplicationLoadbalancer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#delete ApplicationLoadbalancer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#update ApplicationLoadbalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#create ApplicationLoadbalancer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#default ApplicationLoadbalancer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#delete ApplicationLoadbalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/application_loadbalancer#update ApplicationLoadbalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadbalancerFlowlogOutputReference <a name="ApplicationLoadbalancerFlowlogOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancerFlowlogOutputReference;

new ApplicationLoadbalancerFlowlogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlogOutputReference.property.internalValue"></a>

```java
public ApplicationLoadbalancerFlowlog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerFlowlog">ApplicationLoadbalancerFlowlog</a>

---


### ApplicationLoadbalancerTimeoutsOutputReference <a name="ApplicationLoadbalancerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.application_loadbalancer.ApplicationLoadbalancerTimeoutsOutputReference;

new ApplicationLoadbalancerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

---



