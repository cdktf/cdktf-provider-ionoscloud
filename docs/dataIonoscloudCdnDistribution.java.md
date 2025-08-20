# `dataIonoscloudCdnDistribution` Submodule <a name="`dataIonoscloudCdnDistribution` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudCdnDistribution <a name="DataIonoscloudCdnDistribution" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution ionoscloud_cdn_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistribution;

DataIonoscloudCdnDistribution.Builder.create(Construct scope, java.lang.String id)
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
//  .domain(java.lang.String)
//  .id(java.lang.String)
//  .partialMatch(java.lang.Boolean)
//  .partialMatch(IResolvable)
//  .timeouts(DataIonoscloudCdnDistributionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | The domain of the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#id DataIonoscloudCdnDistribution#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether partial matching is allowed or not when using domain argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

The domain of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#domain DataIonoscloudCdnDistribution#domain}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#id DataIonoscloudCdnDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.partialMatch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether partial matching is allowed or not when using domain argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#partial_match DataIonoscloudCdnDistribution#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#timeouts DataIonoscloudCdnDistribution#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetPartialMatch">resetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.putTimeouts"></a>

```java
public void putTimeouts(DataIonoscloudCdnDistributionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

---

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetId"></a>

```java
public void resetId()
```

##### `resetPartialMatch` <a name="resetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetPartialMatch"></a>

```java
public void resetPartialMatch()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudCdnDistribution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistribution;

DataIonoscloudCdnDistribution.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistribution;

DataIonoscloudCdnDistribution.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistribution;

DataIonoscloudCdnDistribution.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistribution;

DataIonoscloudCdnDistribution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataIonoscloudCdnDistribution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataIonoscloudCdnDistribution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataIonoscloudCdnDistribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataIonoscloudCdnDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudCdnDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.publicEndpointV4">publicEndpointV4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.publicEndpointV6">publicEndpointV6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.resourceUrn">resourceUrn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.routingRules">routingRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList">DataIonoscloudCdnDistributionRoutingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference">DataIonoscloudCdnDistributionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatchInput">partialMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `publicEndpointV4`<sup>Required</sup> <a name="publicEndpointV4" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.publicEndpointV4"></a>

```java
public java.lang.String getPublicEndpointV4();
```

- *Type:* java.lang.String

---

##### `publicEndpointV6`<sup>Required</sup> <a name="publicEndpointV6" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.publicEndpointV6"></a>

```java
public java.lang.String getPublicEndpointV6();
```

- *Type:* java.lang.String

---

##### `resourceUrn`<sup>Required</sup> <a name="resourceUrn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.resourceUrn"></a>

```java
public java.lang.String getResourceUrn();
```

- *Type:* java.lang.String

---

##### `routingRules`<sup>Required</sup> <a name="routingRules" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.routingRules"></a>

```java
public DataIonoscloudCdnDistributionRoutingRulesList getRoutingRules();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList">DataIonoscloudCdnDistributionRoutingRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeouts"></a>

```java
public DataIonoscloudCdnDistributionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference">DataIonoscloudCdnDistributionTimeoutsOutputReference</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `partialMatchInput`<sup>Optional</sup> <a name="partialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatchInput"></a>

```java
public java.lang.Object getPartialMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `partialMatch`<sup>Required</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatch"></a>

```java
public java.lang.Object getPartialMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudCdnDistributionConfig <a name="DataIonoscloudCdnDistributionConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionConfig;

DataIonoscloudCdnDistributionConfig.builder()
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
//  .domain(java.lang.String)
//  .id(java.lang.String)
//  .partialMatch(java.lang.Boolean)
//  .partialMatch(IResolvable)
//  .timeouts(DataIonoscloudCdnDistributionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain of the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#id DataIonoscloudCdnDistribution#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether partial matching is allowed or not when using domain argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#domain DataIonoscloudCdnDistribution#domain}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#id DataIonoscloudCdnDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.partialMatch"></a>

```java
public java.lang.Object getPartialMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether partial matching is allowed or not when using domain argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#partial_match DataIonoscloudCdnDistribution#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.timeouts"></a>

```java
public DataIonoscloudCdnDistributionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#timeouts DataIonoscloudCdnDistribution#timeouts}

---

### DataIonoscloudCdnDistributionRoutingRules <a name="DataIonoscloudCdnDistributionRoutingRules" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionRoutingRules;

DataIonoscloudCdnDistributionRoutingRules.builder()
    .build();
```


### DataIonoscloudCdnDistributionRoutingRulesUpstream <a name="DataIonoscloudCdnDistributionRoutingRulesUpstream" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionRoutingRulesUpstream;

DataIonoscloudCdnDistributionRoutingRulesUpstream.builder()
    .build();
```


### DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions;

DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions.builder()
    .build();
```


### DataIonoscloudCdnDistributionTimeouts <a name="DataIonoscloudCdnDistributionTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionTimeouts;

DataIonoscloudCdnDistributionTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#create DataIonoscloudCdnDistribution#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#default DataIonoscloudCdnDistribution#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#delete DataIonoscloudCdnDistribution#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#update DataIonoscloudCdnDistribution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#create DataIonoscloudCdnDistribution#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#default DataIonoscloudCdnDistribution#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#delete DataIonoscloudCdnDistribution#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/data-sources/cdn_distribution#update DataIonoscloudCdnDistribution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudCdnDistributionRoutingRulesList <a name="DataIonoscloudCdnDistributionRoutingRulesList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionRoutingRulesList;

new DataIonoscloudCdnDistributionRoutingRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.get"></a>

```java
public DataIonoscloudCdnDistributionRoutingRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudCdnDistributionRoutingRulesOutputReference <a name="DataIonoscloudCdnDistributionRoutingRulesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference;

new DataIonoscloudCdnDistributionRoutingRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.upstream">upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList">DataIonoscloudCdnDistributionRoutingRulesUpstreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules">DataIonoscloudCdnDistributionRoutingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `upstream`<sup>Required</sup> <a name="upstream" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.upstream"></a>

```java
public DataIonoscloudCdnDistributionRoutingRulesUpstreamList getUpstream();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList">DataIonoscloudCdnDistributionRoutingRulesUpstreamList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.internalValue"></a>

```java
public DataIonoscloudCdnDistributionRoutingRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules">DataIonoscloudCdnDistributionRoutingRules</a>

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList;

new DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.get"></a>

```java
public DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference;

new DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList">allowList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList">blockList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowList`<sup>Required</sup> <a name="allowList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList"></a>

```java
public java.util.List<java.lang.String> getAllowList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blockList`<sup>Required</sup> <a name="blockList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList"></a>

```java
public java.util.List<java.lang.String> getBlockList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue"></a>

```java
public DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamList <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList;

new DataIonoscloudCdnDistributionRoutingRulesUpstreamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.get"></a>

```java
public DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference;

new DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.caching">caching</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass">rateLimitClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode">sniMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.waf">waf</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream">DataIonoscloudCdnDistributionRoutingRulesUpstream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.caching"></a>

```java
public IResolvable getCaching();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `geoRestrictions`<sup>Required</sup> <a name="geoRestrictions" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions"></a>

```java
public DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList getGeoRestrictions();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `rateLimitClass`<sup>Required</sup> <a name="rateLimitClass" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass"></a>

```java
public java.lang.String getRateLimitClass();
```

- *Type:* java.lang.String

---

##### `sniMode`<sup>Required</sup> <a name="sniMode" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode"></a>

```java
public java.lang.String getSniMode();
```

- *Type:* java.lang.String

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.waf"></a>

```java
public IResolvable getWaf();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue"></a>

```java
public DataIonoscloudCdnDistributionRoutingRulesUpstream getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream">DataIonoscloudCdnDistributionRoutingRulesUpstream</a>

---


### DataIonoscloudCdnDistributionTimeoutsOutputReference <a name="DataIonoscloudCdnDistributionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_cdn_distribution.DataIonoscloudCdnDistributionTimeoutsOutputReference;

new DataIonoscloudCdnDistributionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

---



